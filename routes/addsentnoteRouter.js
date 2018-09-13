var express = require('express');
var app = express();
var addNote = require('../models/addnotes');
var sentNote = require('../models/sentnotes');
var addsendnoteRouter = express.Router();
var fs =require('fs');




addsendnoteRouter.post("/addnotes", (req,res) => {
    var myNote = new addNote({
       title: req.body.title,
       message:req.body.message,
       date: req.body.date 
    });
    myNote.save()
    .then((myNote) => {
        fs.readFile('./Html/User.html',(err,data)=>{
            res.writeHead(200,{'content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    })
    .catch((err) => {
       res.end("<h2>Sorry some internal error occured ! <br>Please try again .. </h2>");
    });
})
.post("/sentnote",(req,res) => {
    var sentnotes = new sentNote({
        title: req.body.title,
        email: req.body.email,
        message: req.body.mess,
        date: req.body.date
    });

    sentnotes.save()
    .then((sentnotes) => {
        fs.readFile('./Html/User.html',(err,data)=>{
            res.writeHead(200,{'content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    })
    .catch((err) => {
        res.end("<h2>Sorry some internal error occured ! <br>Please try again .. </h2>");
    });
});

module.exports = addsendnoteRouter;
