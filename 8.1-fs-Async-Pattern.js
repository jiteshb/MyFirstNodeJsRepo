const fs = require('fs').promises;
console.log("start")
//offload this task - do in async 
const start = async() => { 
    try{
        const first = await fs.readFile('../content/first.txt', 'utf8');
        console.log("first " + first);
        const second = await fs.readFile('./content/second.txt', '');
        console.log("second " + second);
    }catch(err){
        console.log('error ' + err);
    }
}
//or another way to do
async function doThis() { 
    try{
        const first = await fs.readFile('./content/first.txt', 'utf8');
        console.log("first " + first);
        const second = await fs.readFile('./content/second.txt', '');
        console.log("second " + second);
    }catch(err){
        console.log('error ' + err);
    }
}


//pick next task, without waiting for i/o operations
start();
doThis();
console.log('starting next task');