var express = require('express');
var app = express();
var User = require('../models/user');
var addsendnoteRouter = express.Router();

addsendnoteRouter.post("/addnotes", (req,res) => {
  User.findOne({username: req.session.username})
    .then((data) => {
        console.log("entered");
        var myNote = {
            title: req.body.title,
            message:req.body.message,
            date: req.body.date 
         };
       data.notes.push(myNote);
       data.save().then(()=>{
           console.log("Saved");
           res.json({result: true});
       }).catch((err) =>{
           console.log("1.not added");
           res.json({result:false});
       });
       
    }).catch((err) =>{
        console.log("Not added");
        res.json({result: false});
    });
});

addsendnoteRouter.get("/allnotes",(req,res) => {
    
 User.findOne({username:req.session.username})
 .then((user)=>{
     console.log("user.title  ::"+user.notes);
     return res.json({notes:user.notes});
 });
});

module.exports = addsendnoteRouter;
