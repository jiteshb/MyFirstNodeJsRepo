const http = require("http");
const fs = require("fs");

const server = http.createServer();

console.log("Program Started");


server.on("request", (req, res) => {
  if (req.url === "/") {
    res.write("My Second Web Application");
    res.end();
  } else if (req.url === "/about") {

    var readerStream = fs.createReadStream("./content/bigFile.txt"); //Create a readable stream
    
    readerStream.on("data", (chunk) => {
      res.write(chunk);
    })
   
    console.log("after write");
    
  } else {
    
    res.end(`<h1>Error Application</h1> 
    <a href="/"> BACK </a>`);
  }
});
server.listen(5000);
console.log("Program Ended");
