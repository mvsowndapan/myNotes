var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var not = new Schema({
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
},{
    timestamps:true,
    usePushEach: true 
});
var UsernameSchema = new Schema({
    username:{
      type:String,
      required:true
    },
    password:{
        type:String,
        required:true
    },
    notes:[not]
},{
    timestamps:true,
    usePushEach: true 
});

 
module.exports = mongoose.model("User", UsernameSchema);
