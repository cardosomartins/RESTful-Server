const http = require("http");

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    
    switch(req.url){
        case '/':
            res.end("There's nothing to look for in here");
            break;

        case '/secret':
            res.end("This is the secret path");
            break;
    }
});

server.listen(port, hostname, () => {
    console.log(`Hello homie, server is running at: http://${hostname}:${port}/`);
});


