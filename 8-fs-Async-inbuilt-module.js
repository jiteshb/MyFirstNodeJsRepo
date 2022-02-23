const fs = require('fs');
//Async
const readFile = fs.readFile;
const writeFile = fs.writeFile;

//Async - Callback function
//callback hell
console.log("start")
//offload this task - do in async 
readFile('./content/first.txt', 'utf8', (err, data) => {

    if (err) {
        console.log(err);
        return;
    }
    const first = data;
    //read second file
    readFile('./content/second.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = data;
        //write to result file
        writeFile('./content/resultAsync.txt', ` result - ${first}, ${second}`, { flag: 'a' }, (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})
//pick next task, without waiting for i/o operations
console.log('starting next task');