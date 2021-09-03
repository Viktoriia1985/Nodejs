// const fileData = require('./dir/file1');
//require('./folder');
//
// fileData.greeting('Мирослава Михайлівна');

const fs = require('fs');
const path = require('path');
// const os = require('os');
// const util = require('util');


const textPath = path.join(__dirname, 'dir', 'text.txt');
// console.log(textPath);
const folderWithDeletedDate = path.join(__dirname, 'folder', 'deleted.txt');
const dirToReadPath = path.join(__dirname, 'dir');


// fs.writeFile(textPath, 'HELLO 55555555', err => {
//     console.log(err);
// });

// fs.appendFile(textPath, 'NEW HELLO \n', err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//
//     console.log('DONE');
// });

// const mkDirPath = path.join(__dirname, 'dir', 'folder', 'innerFolder', 'HELLxxxx');
//
// fs.mkdir(mkDirPath, {recursive: true},err=> {
//     console.log(err);
// });

// fs.readFile(textPath, (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     // fs.appendFile(textPath2, data, err1 => {
//     //
//     // })
//     console.log(data.toString());
// });


// fs.readdir(dirToReadPath, (err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     // console.log(files);
//
//     files.forEach(file => {
//         const filePath = path.join(dirToReadPath, file);
//         fs.stat(filePath, (err1, stats) => {
//             console.log('____________________________________');
//             console.log(stats.isFile(), 'isFile');
//             console.log(stats.isDirectory(), 'isDirectory');
//             console.log(stats.size);
//             console.log('____________________________________');
//         })
//     })
// });


// fs.rmdir(path.join(dirToReadPath), err => {                          // удаляє папку
//     console.log(err);
// })

// fs.unlink(path.join(__dirname, 'dir', 'text2.txt'), err => {         // удаляє файл
//     console.log(err);
// });

// fs.rename(textPath, folderWithDeletedDate, err => {                 // переміщає та змінює ім'я файла
//     console.log(err);
// });

// const util = require('util');
// const appendPromise = util.promisify(fs.appendFile);                 //ертає промісіфіковану функцію
//
// appendPromise(folderWithDeletedDate, 'TEXT DATA БОГДАН WITH PROMISE \n').catch(reason => {
//         console.log(reason);
//     })


//          ----------            STREAM             ----------

// const readStream = fs.createReadStream(folderWithDeletedDate);
//
// readStream.on('data', chunk => {                               //  chunk = 64Kb
//     console.log(chunk);
// });


const readStream = fs.createReadStream(folderWithDeletedDate);  // читає дані стрімами
const writeStream = fs.createWriteStream(textPath);             //записує дані стрімами

console.time('STREAM');
readStream.on('data', chunk => {
    writeStream.write(chunk);
});
console.timeEnd('STREAM');

// readStream.pipe(writeStrm);
console.timeEnd('STRM');






