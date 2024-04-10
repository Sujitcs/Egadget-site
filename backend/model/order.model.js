const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    'order_date': {
        type :Date,
        default : Date()
    },
    'product_id': {
          type:mongoose.Schema.Types.ObjectId,
          require:true,
          ref:'productModel'
    },
    'user_id':{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:'userModel'
    },
    'status':{
        type: String,
        default:'order placed'
    },
},{versionKey:false});

module.exports = mongoose.model('orderModel',orderSchema,'ordersInfo');
console.log("Order Model is Ready for use");
