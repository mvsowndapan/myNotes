var express = require('express');
var User = require('../models/user');
var fs = require('fs');
var router = express.Router();
var passport = require('passport');

router.post("/signup", (req, res) => {
    User.findOne({ username: req.body.username })
        .then((user) => {
            if (user != null) {
                res.json({ result: false });
            }
            else {
                var newUser = new User({
                    username: req.body.username,
                    password: req.body.password
                });
                newUser.save()
                    .then((user) => {
                        res.json({ result: 'true' });
                    });
            }
        })
        .catch((err) => {
            res.json({ result: false });
        });

});

//login endpoint.................................
router.post("/login", (req, res) => {
    User.findOne({ username: req.body.name })
        .then((user) => {
            if (user.password === req.body.pass) {
                req.session.username = user.username;
                fs.readFile('./Html/User.html', (err, data) => {
                    res.writeHead(200, { 'content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                });
            }
            else {
                fs.readFile('./Html/loginfail.html', (err, data) => {
                    res.writeHead(200, { 'content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                });
            }
        })
        .catch((err) => {
            fs.readFile('./Html/loginfail.html', (err, data) => {
                res.writeHead(200, { 'content-Type': 'text/html' });
                res.write(data);
                res.end();
            });
        });

});

router.get("/one",function(req,res,next){
    console.log(req.session.username);
   return res.json({welcome:req.session.username});
  });
  
module.exports = router;

