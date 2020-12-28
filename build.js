const fs = require('fs');

const LIST = {};

function list(dir) {

    let _files = [];

    fs.readdirSync(dir).forEach(file => {

        if (file.substr(0, 1) != '.') {

            let path = dir + file;
            let stat = fs.lstatSync(path);

            let isDirectory = stat.isDirectory();
            let isFile = stat.isFile();

            if ((isFile || isDirectory))
                _files.push({ file, type: isDirectory ? 'dir' : 'file', ext: isFile ? file.split('.').pop() : '' });
            
            if (isDirectory) list(path + '/');

        }

    });

    LIST[dir.substr(1)] = _files;
}

list('./');

LIST['/'] = LIST['/'].filter(f => f.type == 'dir');
fs.writeFileSync('files.json', JSON.stringify(LIST));
