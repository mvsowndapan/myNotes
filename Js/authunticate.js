const mongoose = require('mongoose');
const userModel = require('../models/user');

function validate(req, res, next) {
    console.log('authenticate User : '+req.session.username);
    if (!req.session.username) {
        res.redirect('/');
    } else {
        userModel.findOne({
            username: req.session.username
        }).then(() => {
            req.session.touch();
            console.log('Session touched');
            next();
        }).catch(err => next(err));
    }
}

module.exports = validate;