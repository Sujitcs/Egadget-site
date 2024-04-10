const express = require('express');
const productRouter = express.Router();
const multer = require('multer');
const productModel = require('../model/product.model');
const base_url = require('../model/base_url');

const uploadStorage = multer.diskStorage({
    destination:'public/assets/',
    filename: (req,file,cb)=>{
        cb(null,file.originalname+"-"+Date.now()+".jpg");

    }
});

const uploadObj = multer({storage:uploadStorage});

//adding the product
productRouter.post('/add',uploadObj.single('product_pic'),(req,res)=>{
        let newproduct = new productModel({
            'name':req.body.name,
            'category':req.body.category,
            'description':req.body.desc,
            'oldprice':req.body.oldprice,
            'newprice':req.body.newprice,
            'product_pic': base_url+"/assets/"+req.file.filename
        });
        newproduct.save()
               .then((insertedProductInfo)=>{
                res.status(200).json(insertedProductInfo);
               })
               .catch((error)=>{
                if(error) res.status(200).json(error);
               })
});

//show the all products
productRouter.get('/list',(req,res)=>{
      productModel.find({}).exec()
               .then((productData)=>{
                res.status(200).json(productData);
               })
               .catch((error)=>{
                if(error) res.status(200).json(error);
               });
});
//show product by id
productRouter.get('/list/:id',(req,res)=>{
    productModel.findOne({'_id':req.params.id})
             .exec()
             .then((productData)=>{
                if(!productData)
                   res.status(200).json({'message':'no such food found'});
                else 
                   res.status(200).json(productData);
             })
             .catch((error)=>{
                if(error) res.status(200).json(error);
             });
});
//adding the delete routes
productRouter.delete('/del/:id',(req,res)=>{
    productModel.deleteOne({'_id':req.params.id})
             .then((deletedProductInfo)=>{
                if(deletedProductInfo.deletedCount==1)
                   res.status(200).json({'message':'One Product has been removed'});
                else 
                   res.status(200).json({'message':'Unable to delete'});
                
             })
             .catch((error)=>{console.log(error)});
});
//updating information depends on id.
productRouter.all('/edit/:id',(req,res)=>{
    if(req.method =='PUT' || req.method=='PATCH'){
         productModel.updateOne({'_id':req.params.id},{$set:{
            'name':req.body.name,
            'category':req.body.category,
            'description':req.body.desc,
            'oldprice':req.body.oldprice,
            'newprice':req.body.newprice,
            //'product_pic':req.file.filename
         }})
         .then((productModifiedData)=>{
             //res.status(200).json(userModifiedData);
             if(productModifiedData.modifiedCount ==1)
                res.status(200).json({'message':'product details Updated'});
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
module.exports = productRouter;

console.log('product router is ready to use');
