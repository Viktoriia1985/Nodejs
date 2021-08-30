const fs = require('fs');
const path = require('path');

const mkDir1800_1 = path.join(__dirname, '1800_1');
fs.mkdir(mkDir1800_1, {recursive:true}, err => {
    console.log(err);
});

const mkDir2000_1 = path.join(__dirname, '2000_1');
fs.mkdir(mkDir2000_1, {recursive:true}, err => {
    console.log(err);
});

const femaleClass = path.join(mkDir1800_1, '1800_1');
const maleClass = path.join(mkDir2000_1, '2000_1');
// console.log(femaleClass, 'female');
// console.log(maleClass, 'male');


const textPathAlina = path.join(__dirname, '1800_1', 'Alina.json');
const textPathVika = path.join(__dirname, '2000_1', 'Vika.json');
const textPathGala = path.join(__dirname, '2000_1', 'Gala.json');
const textPathAndriy = path.join(__dirname, '2000_1', 'Andriy.json');
const textPathViktor = path.join(__dirname, '1800_1', 'Viktor.json');
const textPathMax = path.join(__dirname, '1800_1', 'Max.json');
const textPathDaniil = path.join(__dirname, '1800_1', 'Daniil.json');

const infoAlina = '{"name": "Alina", "gender": "female"}';
const infoVika = '{"name": "Vika", "gender": "female"}';
const infoGala = '{"name": "Gala", "gender": "female"}';
const infoAndriy = '{"name": "Andriy", "gender": "male"}';
const infoViktor = '{"name": "Viktor", "gender": "male"}';
const infoMax = '{"name": "Max", "gender": "male"}';
const infoDaniil = '{"name": "Daniil", "gender": "male"}';

fs.writeFile(textPathAlina, infoAlina, err => {
    console.log(err)
});

fs.writeFile (textPathVika, infoVika, err => {
    console.log(err);
});

fs.writeFile (textPathGala, infoGala, err => {
    console.log(err)
});

fs.writeFile(textPathAndriy, infoAndriy, err => {
    console.log(err);
});

fs.writeFile(textPathViktor, infoViktor, err => {
    console.log(err);
});

fs.writeFile(textPathMax, infoMax, err => {
    console.log(err);
});

fs.writeFile(textPathDaniil, infoDaniil, err => {
    console.log(err);
})

fs.readdir(femaleClass, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(femaleClass, file);
        fs.readFile(filePath, (err1, data) => {
            if (err1) {
                console.log(err1);
                return;
            }

            const user = JSON.parse(data.toString());

            if (user.gender === 'male') {
                const femalePath = path.join(femaleClass, file);
                const malePath = path.join(maleClass, file);

                console.log(femalePath, file, 'femail');
                console.log(malePath, file, 'male');

                fs.rename(femalePath, malePath, err2 => {
                    if (err2) {
                        console.log(err2);
                    }
                });
            }
        })
    })
})


fs.readdir(maleClass, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(maleClass, file);
        fs.readFile(filePath, (err1, data) => {
            if (err1) {
                console.log(err1);
                return;
            }

            const user = JSON.parse(data.toString());
            if (user.gender === 'female') {
                const malePath = path.join(maleClass, file);
                const femalePath = path.join(femaleClass, file);

                fs.rename(malePath, femalePath, err2 => {
                    if (err2) {
                        console.log(err2);
                    }
                });
            }
        })
    })
})




