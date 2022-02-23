const http = require('http')

const server = http.createServer((req, res) => {
    res.write("My first node js web application");
    res.end();
})
server.listen(5000);