const mongoose = require("mongoose");

const userCollectionSchema = mongoose.Schema({
     
     'name':{
        type:String,
        require:true,
        
     },
     'email':{
        type:String,
        require:true,
        unique:true
     },
     'pass1':{
        type:String,
        require:true
     },
     'role':{
      type:String,
      default :'regular'
     }
},{versionKey:false});

module.exports = mongoose.model('userModel',userCollectionSchema,'users');
console.log("User Model is Ready to Use");
