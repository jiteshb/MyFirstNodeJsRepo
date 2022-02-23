//Built OS  & Path Module

const { captureRejectionSymbol } = require('events');
const os = require('os')
const path = require('path')

//user info
const user = os.userInfo();
console.log(user)
console.log(" user- " + JSON.stringify(user));

console.log('The System uptime is ' +  os.uptime() + 'seconds');


const currentOs = {

    name : os.type(),
    release : os.release(),

}

console.log(currentOs);


//path separator
console.log(path.sep);

