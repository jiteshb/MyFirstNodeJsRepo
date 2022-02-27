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
    readerStream.pipe(res);
    
    console.log("here");
  } else {
    //DEMO BLOCKING OPERATIONS
    /*for(let i=0; i<10000; i++){
      for(let j=0; j<10000; j++){
        console.log("not just blocked THIS user hitting error page, but all users who would hit about page..");
      }
    }*/
    res.end(`<h1>Error Application</h1> 
    <a href="/"> BACK </a>`);
  }
});
server.listen(5000);
console.log("Program Ended");
