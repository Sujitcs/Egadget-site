const express= require('express');
const userRouter = express.Router();
const db_connect = require('../db/connect');
const userModel = require("../model/user.model");
const base_url = require("../model/base_url");
const bcrypt = require("bcryptjs");


function hashPass(pass1){
    
   var salt = bcrypt.genSaltSync(10);
   var hashPassword = bcrypt.hashSync(pass1, salt);
   return hashPassword;
}
function checkPass(dbPass,userPass){
   
    var isChecked = bcrypt.compareSync(userPass,dbPass);
    return isChecked;
}


userRouter.get('/list',(req,res)=>{
    //res.status(200).json('userlist');
    userModel.find({})
            .exec()
            .then((userInfo)=>{
                res.status(200).json(userInfo);
            })
            .catch((error)=>{
                if(error) res.status(200).json(error);
            });
});
userRouter.post('/signup',(req,res)=>{
                 
 const um = new userModel({
    'name': req.body.name,
    'email':req.body.email,
    'pass1':hashPass(req.body.pass1)
   });
   um.save()
     .then((userData)=>{
        res.status(200).json(
            {'message':'user signup successfully done',
            'sumittedData':userData
           });
     })
     .catch((error) => {
      if (error.code === 11000 && error.keyPattern.email) {
          res.status(200).json({'message': 'Email already registered'});
      } else {
          res.status(200).json({'message': error.message});
      }
  });
});
// signin routes
userRouter.post('/signin',(req,res)=>{
       userModel.findOne({'email':req.body.email})
                .exec()
                .then((userInfo)=>{
                    if(!userInfo)
                      res.status(200).json({'message':'user doesnot exists !'});
                    else{
                        //res.status(200).json(userInfo); 
                        let db_pass = userInfo.pass1;
                        let isValid = checkPass(db_pass,req.body.pass1);
                        if(isValid)
                           res.status(200).json({'message':'success','userInfo':userInfo});
                        else
                           res.status(200).json({'message':'Wrong Cridentials !!'});

                    }
                })
                .catch((error)=>{
                    if(error) res.status(200).json(error);

                });

});
// the delete routes
userRouter.delete('/del/:id',(req,res)=>{
        userModel.deleteOne({'_id':req.params.id})
                 .then((deletedUserInfo)=>{
                    if(deletedUserInfo.deletedCount==1)
                       res.status(200).json({'message':'One User Profile has been removed'});
                    else 
                       res.status(200).json({'message':'Unable to delete User Profile'});
                    
                 })
                 .catch((error)=>{});
});
//updating user information depends on id.
userRouter.all('/edit/:id',(req,res)=>{
   if(req.method =='PUT' || req.method=='PATCH'){
        userModel.updateOne({'_id':req.params.id},{$set:{
             'name':req.body.name,
             //'phone':req.body.phone,
             'email':req.body.email,
             //'address':req.body.address,
             'pass1':hashPass(req.body.pass1)
        }})
        .then((userModifiedData)=>{
            //res.status(200).json(userModifiedData);
            if(userModifiedData.modifiedCount ==1)
               res.status(200).json({'message':'User profile Updated'});
            else 
               res.status(200).json({'message':'unable to update'});

         })
        .catch((error)=>{
           if(error) res.status(200).json(error);
        });

   }else{
     res.status(200).json({'message':'This Method doesnot supported'});

   }
});

module.exports= userRouter;
console.log('user router is ready to use');
