var express = require('express');
const logger = require('morgan');
var app = express();
const port = process.env.PORT || 3000;
var session = require('express-session'); 
var Filestore = require('session-file-store')(session);
session = require('express-session'),
fs = require('fs'),
mongoStore = require('connect-mongo')(session);

var startRouter = require('./routes/startRouter');
var User = require('./models/user');
var addsentnoteRouter = require('./routes/addsentnoteRouter');
var users = require('./routes/users');

//Body-parser .......................
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(logger('dev'));

//server port listen ..............................
app.listen(port, () => {
    console.log("server listening startted");
});

//mongoDB Connection .........................
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://root:root1234@ds137740.mlab.com:37740/mynotes", { useNewUrlParser: true }).then(() => {
    console.log("connection sucessfull");
}).catch((err) => {
    console.log("Connection failed");
});

// Loading initial data to the application 
//endpoint ......................................
app.use("/", express.static("./"));
app.use("/assets",express.static(__dirname + "/public"));

var auth = require("./public/Js/authunticate.js");
app.use(session({
    name: 'Session-Example',
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    }),
    secret: 'MyNoteApplication',
    resave: false,
    saveUninitialized: false,
    cookie: {}
}));


app.use('/users',users);
app.use(auth);

app.get("/logout", (req, res) => {
    req.session.destroy();
    req.session = null;
    console.log('Session destroyed');
    res.redirect('./assets/Html/index.html');
});

app.use('/addsentnoteRouter',addsentnoteRouter);
