const fs = require('fs');
const path = require('path');

const filteredFolders = path.join(__dirname, 'filteredFolders');
const newPathFolder = path.join(__dirname, 'filteredFolders/dirForEdit/newDir', 'text1.txt');
const newPathFolder2 = path.join(__dirname, 'filteredFolders/dirForEdit/newFolder', 'file333.txt');
const renamePathFolder = path.join(__dirname, 'filteredFolders/dirForEdit/newFolder', 'newfile.txt');
const movedFiles = path.join(__dirname, 'filteredFolders', 'movedFiles');
const dirForEdit = path.join(filteredFolders, 'dirForEdit');


fs.writeFile(newPathFolder, 'Hello, Gubby, Hello!!!', err => {
    console.log(err);
})

fs.writeFile(newPathFolder2, 'Goodbye, Gubby, Goodbye!!!', err => {
    console.log(err);
})

fs.rename(newPathFolder, renamePathFolder, err => {
    console.log(err);
})

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
           //console.log(oldPath);

            fs.stat(oldPath, (err1, stats) => {
                if (err1) {
                    console.log(err1);
                    return;
                }
                console.log(stats.isDirectory(), 'isDirectory', file);

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
moveFiles(dirForEdit);


