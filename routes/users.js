var express = require('express');
var User = require('../models/user');
var fs =require('fs');
var router = express.Router();
var passport = require('passport');

router.post("/signup", (req, res) => {
    // var user = new User({
    //     username: req.body.username,
    //     password:req.body.password
    // });
    console.log(req);
    console.log(req.body.username);

    User.findOne({username: req.body.username})
    .then((user) => {
        if(user != null){
            // fs.readFile('./Html/loginfail.html',(err,data)=>{
            //     res.writeHead(200,{'content-Type':'text/html'});
            //     res.write(data);
            //     res.end();
            // });   
            res.json({result: false});
        }
        else{
            var newUser = new User({
                username: req.body.username,
                password: req.body.password
            });
            newUser.save()
            .then((user) => {
                console.log(user);
               
                    // fs.readFile('./Html/signup.html',(err,data)=>{
                    //     res.writeHead(200,{'content-Type':'text/html'});
                    //     res.write(data);
                    //     res.end();
                    // });   
                res.json({result: 'true'});
            });
        }    
    })
    .catch((err) => {
        // fs.readFile('./Html/loginfail.html',(err,data)=>{
        //     res.writeHead(200,{'content-Type':'text/html'});
        //     res.write(data);
        //     res.end();
        // }); 
        res.json({result: false});
    });
   
});

//login endpoint.................................
router.post("/login",(req,res) => {
    User.findOne({username:req.body.name})
    .then((user) =>{ 
         console.log(user);
         console.log(req.body.pass);
         console.log(user.password);
              if(user.password === req.body.pass){
                        console.log('2');
                        fs.readFile('./Html/User.html',(err,data)=>{
                            res.writeHead(200,{'content-Type':'text/html'});
                            res.write(data);
                            res.end();
                        });   
                }
                else{
                    fs.readFile('./Html/loginfail.html',(err,data)=>{
                         res.writeHead(200,{'content-Type':'text/html'});
                         res.write(data);
                         res.end();
                });
         }
    })
       .catch((err) => {
            res.statusCode = 404;
            res.setHeader('Content-Type','application/json');
            res.json({status:'Registration Not Successfulll'});
        });
       
});

//logout 
router.get("/logout",(req,res) => {
   res.redirect('/'); 
});

module.exports = router;


// //login endpoint.................................
// router.post("/login",passport.authenticate('local'),(req,res) => {

//     //    User.register(new User({username: req.body.name}),req.body.password,(err,user) =>{ 
//     //     if(err){
//     //         fs.readFile('./Html/loginfail.html',(err,data)=>{
//     //             res.writeHead(200,{'content-Type':'text/html'});
//     //             res.write(data);
//     //             res.end();
//     //         });
//     //     }
//     //     else if(user.password === req.body.pass){
//     //         passport.authenticate('local')(req,res,() => {
//                 fs.readFile('./Html/User.html',(err,data)=>{
//                     res.writeHead(200,{'content-Type':'text/html'});
//                     res.write(data);
//                     res.end();
//         //         });   
//         //     });
//         //  }
//         // else{
//         //     fs.readFile('./Html/loginfail.html',(err,data)=>{
//         //         res.writeHead(200,{'content-Type':'text/html'});
//         //         res.write(data);
//         //         res.end();
//         //     });
// //         // }
// //    })
// //    .catch((err) => {
// //             res.statusCode = 404;
// //             res.setHeader('Content-Type','application/json');
// //             res.json({status:'Registration Not Successfulll'});
// //    });
// });