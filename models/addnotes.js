var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addNotesSchema = new Schema({
    title:{
        type:String,
        default:"No-title",
    },
    message:{
        type:String,
        default:"Empty-message",
    },
    date:{
        type:Date,
        required:true
    }
});
module.exports = mongoose.model("addNote",addNotesSchema); 
