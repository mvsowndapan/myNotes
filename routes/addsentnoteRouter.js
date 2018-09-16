var express = require('express');
var app = express();
var addNote = require('../models/addnotes');
var addsendnoteRouter = express.Router();
// var fs =require('fs');
// var session = require('express-session'); 
// session = require('express-session'),
// fs = require('fs');
 



addsendnoteRouter.post("/addnotes", (req,res) => {
    var myNote = new addNote({
       title: req.body.title,
       message:req.body.message,
       date: req.body.date 
    });
    myNote.save()
    .then((myNote) => {
        console.log('NOtes added');
        res.json({result: true});
    })
    .catch((err) => {
        console.log('NOtes not added');
        res.json({result: false});
    });
});

module.exports = addsendnoteRouter;
