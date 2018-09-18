var express = require('express');
var app = express();
var fs = require('fs');
var startRouter = express.Router();
startRouter.get("/", (req, res) => {
    // res.send("Sadfb");
    fs.readFile('./Html/index.html', (err, data) => {
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
});

module.exports = startRouter;