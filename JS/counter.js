const fs = require('fs-extra');
const path = require('path');

const counterFilePath = path.join(__dirname, 'counter.txt');

fs.ensureFileSync(counterFilePath);

fs.readFile(counterFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let count = parseInt(data) || 0;
    count++;

    fs.writeFile(counterFilePath, count.toString(), err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Zahl erfolgreich hinzugefügt: ' + count);
    });
});
