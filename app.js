var express = require('express');
const logger = require('morgan');
var app = express();
const port = process.env.PORT || 3000;
var session = require('express-session'); 
var Filestore = require('session-file-store')(session);


var User = require('./models/user');
var addNotes = require('./models/addnotes');
var sentNotes = require('./models/sentnotes');
var addsentnoteRouter = require('./routes/addsentnoteRouter');
var users = require('./routes/users');

//Body-parser .......................
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(logger('dev'));

//session ..............................


//mongoDB Connection .........................
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/mynote", { useNewUrlParser: true }).then(() => {
    console.log("connection sucessfull");
}).catch((err) => {
    console.log("Connection failed");
});

// Loading initial data to the application 
//endpoint ......................................
app.use("/", express.static("./"));
app.get("/", (req, res) => {
    // res.send("Sadfb");
    res.sendFile(__dirname + "/Html/index.html");
});
app.listen(port, () => {
    console.log("server listening startted");
});

app.use('/users',users);
app.use('/addsentnoteRouter',addsentnoteRouter);
