const { FILE } = require('dns');
const fs = require('fs');

const LIST = {};

function list(dir) {
    let _files = [];
    fs.readdirSync(dir).forEach(file => {
        if (file.substr(0, 1) != '.') {
            let path = dir + file;
            let isDirectory = fs.lstatSync(path + '/').isDirectory();
            let isFile = fs.lstatSync(path).isFile();
            if ((isFile || isDirectory))
                _files.push({ file, type: isDirectory ? 'dir' : 'file', ext: isFile ? file.split('.').pop() : '' });
            if (isDirectory) list(dir + file + '/');
        }
    });
    LIST[dir.substr(1)] = _files;
}

list('./');

LIST['/'] = LIST['/'].filter(f => f.type == 'dir');
fs.writeFileSync('files.json', JSON.stringify(LIST));