const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url==='/'){
        res.write("My Second Web Application");
        res.end();
    }else  if(req.url==='/about'){
        res.write("About Application");
        res.end();
    }else {
        res.end(`<h1>Error Application</h1> 
                <a href="/"> BACK </a>`);    
    }
})
server.listen(5000);