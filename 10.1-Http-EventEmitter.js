const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.write("My Second Web Application");
    res.end();
  } else if (req.url === "/about") {
    res.write("About Application");
    res.end();
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
