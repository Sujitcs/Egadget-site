const express = require('express');
const orderRouter = express.Router();
const orderModel = require('../model/order.model');
const { isValidObjectId } = require('mongoose');

//all order created api will goes here ...
orderRouter.post('/buy/:product_id/:user_id',(req,res)=>{
     let product_id = req.params.product_id;
     let user_id = req.params.user_id;
     let newOrder = new orderModel({'product_id':product_id,'user_id':user_id});
     newOrder.save()
             .then((orderInfo)=>{
                  res.status(200).json({'message':'Order PLaced Successfully !!','orderInfo':orderInfo});
             })
             .catch((error)=>{
                if(error) res.status(200).json({'message':error});
             })
     
});

//fetch by order id
 orderRouter.get("/view/:order_id",(req,res)=>{
    orderModel.findOne({
        '_id':req.params.order_id
    }).populate('product_id')
      .populate('user_id')
      .exec()
      .then((orderInfo)=>{
        if(!orderInfo)
           res.status(200).json({'message':'No such Order Listed'});
        else 
           res.status(200).json({
               'order_id':orderInfo._id,
               'Name':orderInfo.product_id.name,
               'category':orderInfo.product_id.category,
               'oldprice': orderInfo.product_id.oldprice,
               'newprice': orderInfo.product_id.newprice,
               'customer':orderInfo.user_id.name,
               'date of Order':orderInfo.order_date,
               'status':orderInfo.status
           });
      })
      .catch((error)=>{
        if(error) res.status(200).json({'message':error});

      })
 });

 orderRouter.get("/all", (req, res) => {
   orderModel.find({})
     //.populate('product_id')
     .populate('user_id')
     .exec()
     .then((orderInfo) => {
       if (!orderInfo) {
         res.status(200).json({ 'message': 'No such listing found' });
       } else {
         const orderdetails = orderInfo.map((e) => ({
                'order_id':e._id,
                //'Name':e.product_id.name,
                //'category':e.product_id.category,
                //'oldprice': e.product_id.oldprice,
                //'newprice': e.product_id.newprice,
                'customer':e.user_id.name,
                'email':e.user_id.email,
                'date of Order':e.order_date,
                'status':e.status,
                
         }));
         res.status(200).json(orderdetails);
       }
     })
     .catch((error) => {
       res.status(200).json({ 'message': error });
     })
 });

//fetch by user id
//  orderRouter.get("/view/user/:user_id",(req,res)=>{
//    orderModel.findOne({
//        'user_id':req.params.user_id
//    }).populate('product_id')
//      .populate('user_id')
//      .exec()
//      .then((orderInfo)=>{
//        if(!orderInfo)
//           res.status(200).json({'message':'No such Order Listed'});
//        else 
//           res.status(200).json({
//               'order_id':orderInfo._id,
//               'Name':orderInfo.product_id.name,
//               'category':orderInfo.product_id.category,
//               'oldprice': orderInfo.product_id.oldprice,
//               'newprice': orderInfo.product_id.newprice,
//               'customer':orderInfo.user_id.name,
//               'date of Order':orderInfo.order_date,
//               'status':orderInfo.status
//           });
//      })
//      .catch((error)=>{
//        if(error) res.status(200).json({'message':error});

//      })
// });



module.exports = orderRouter;
console.log("Order Router is Ready to use");

