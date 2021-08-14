const fs = require('fs');

const LIST = {}; // DO NOT CHANGE TO ARRAY

function list(dir) {

    const files = [];
    const dirs = [];

    fs.readdirSync(dir).forEach(file => {

        const path = dir + file;
        const stat = fs.lstatSync(path);

        if (stat.isFile()) files.push(file);
        else if (stat.isDirectory()) {
            dirs.push(file);
            list(path + '/')
        }

    });

    LIST[dir.substr(1)] = { files, dirs };
}

list('./FILES/');

fs.writeFileSync('website/src/files.js', `module.exports = ${JSON.stringify(LIST, null, 2)}`);