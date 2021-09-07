//   --------------------------------- CLASSWORK ---------------------------------------------
//  вам потрбіно перемісти всі файлики з вкладених
// папок в іншу папку. Зробити всі файли на одному рівні вкладеності.
//   ------------------------------------------------------------------------------------------


const fs = require('fs');
const path = require('path');

const filteredFolders = path.join(__dirname, 'filteredFolders');
const newPathFolder = path.join(__dirname, 'filteredFolders/dirForEdit/newDir', 'text1.txt');
const newPathFolder2 = path.join(__dirname, 'filteredFolders/dirForEdit/newFolder', 'file333.txt');
const renamePathFolder = path.join(__dirname, 'filteredFolders/dirForEdit/newFolder', 'newfile.txt');
const movedFiles = path.join(__dirname, 'filteredFolders', 'movedFiles');


fs.writeFile(newPathFolder, 'Hello, Gubby, Hello!!!', err => {
    if (err) console.log(err);
})

fs.writeFile(newPathFolder2, 'Goodbye, Gubby, Goodbye!!!', err => {
    if (err) console.log(err);
});

fs.rename(newPathFolder, renamePathFolder, err => {
    if (err) console.log(err);
});

fs.mkdir(movedFiles, { recursive: true }, err => {
    if (err) console.log(err);
});


function moveFiles(dirForEdit) {
    fs.readdir(dirForEdit, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }

        files.forEach(file => {
            const oldPath = path.join(dirForEdit, file);

            fs.stat(oldPath, (err1, stats) => {
                if (err1) {
                    console.log(err1);
                    return;
                }

                if (stats.isDirectory()) {
                    moveFiles(oldPath);
                    return;
                }

                const newPath = path.join(movedFiles, file);

                fs.rename(oldPath, newPath, err2 => {
                    if (err2) {
                        console.log(err2);
                    }
                })
            })
        })
    })
}
moveFiles(filteredFolders);


