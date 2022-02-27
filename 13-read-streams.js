const fs = require("fs");
const stream = require("stream");
console.log("Program Started");
var data = '';
var readerStream = fs.createReadStream('./content/bigFile.txt'); //Create a readable stream
readerStream.setEncoding('utf8'); // Set the encoding to be utf8. 
// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");