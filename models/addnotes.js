var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addNotesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});
module.exports = mongoose.model("addNote",addNotesSchema); 
