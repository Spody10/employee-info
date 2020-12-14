const fs = require('fs');


const writeFile = fileInfo => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileInfo, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: 'File has been created!'
            });
        });
    });
};

module.exports = writeFile;