// const fs = require('fs');
// fs.writeFile('message.txt','Hello from prii', (err) => {
//     if (err) throw err;
//     console.log('The file is active')
// });


const fs = require('fs');
fs.readFile('message.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
