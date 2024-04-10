const mongoose = require('mongoose');
//const createdDate = new Date("2023-10-28T20:10:25Z");
function getCurrentTime() {
  let curDate = new Date();
  let day = curDate.getDate();
  let month = curDate.getMonth() + 1;
  let year = curDate.getFullYear();
  let hr = curDate.getHours();
  let min = curDate.getMinutes();
  let sec = curDate.getSeconds();
  let fmt = '';

  if (hr > 12) {
    hr = hr - 12;
    fmt = "PM";
  } else {
    fmt = 'AM';
  }

  return year + "/" + month + "/" + day + " " + hr + ":" + min + ":" + sec + " " + fmt;
}

const productSchema = mongoose.Schema({
  'name': {
    type: String,
    require: true
  },
  'category': {
    type: String,
    require: true
  },
  'newprice': {
    type: Number,
    require: true
  },
  'oldprice': {
    type: Number,
    require: true
  },
  'product_pic': {
    type: String,
    require: true
  },
  'description':{
    type:String,
    require:true
  }
  // 'created_at': {
  //   type: Date,
  //   require: true,
  //   default: getCurrentTime
  // }
}, { versionKey: false });

module.exports = mongoose.model('productModel', productSchema, 'products');
console.log("product model is ready to use");