//const http = require("http");
const express = require("express");
const hostname = '127.0.0.1';
const port = 4000;
const app = express();
const consign = require("consign");

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
    
    
//     switch(req.url){
//         case '/':
//             res.end("There's nothing to look for in here");
//             break;

//         case '/secret':
//             res.end("This is the secret path");
//             break;
//     }
// });

app.get("/", (req, res) => {
    res.end("There's nothing to look for in here");
})

app.get("/secret", (req, res) => {
    res.end("Hello, you have found the secret to everything");
})

// server.listen(port, hostname, () => {
//     console.log(`Hello homie, server is running at: http://${hostname}:${port}/`);
// });

app.listen(port, () => {
    console.log(`Hello homie, server is running at: http://${hostname}:${port}/`);    
})

