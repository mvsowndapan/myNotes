const mongoose = require('mongoose');
const userModel = require('../models/user');
var startRouter = require('../routes/startRouter');

function validate(req, res, next) {
    console.log('authenticate User : '+req.session.username);
    if (!req.session.username) {
        console.log(req.session);
        console.log('User Not Found');
        res.send(startRouter.get('/'));
        // let data = fs.readFileSync('./Html/loginfail.html');
        // res.send(data);
        // console.log('redirect');
    } else {
        userModel.findOne({
            username: req.session.username
        }).then((data) => {
            if(!data){
                res.redirect('/');
            }
            else{
                console.log(data);
            req.session.touch();
            console.log('Session touched');
            next();
            }
        }).catch(err => next(err));
    }
}

module.exports = validate;