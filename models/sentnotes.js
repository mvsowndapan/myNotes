var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var sentNotesSchema = new Schema({
    title:{
        type:String,
        default:"No-tile"
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        default:"No-message"
    },
    date:{
        type:Date,
        required:true
    }
},{
    timestamps:true
});
module.exports =  mongoose.model("sentNote",sentNotesSchema);
