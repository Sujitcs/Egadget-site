//create an webserver using express
const express = require('express');
const cors    = require('cors');

const port = 8080;
const db_connect = require('./db/connect');
const base_url = require('./model/base_url');
//consuming the userrouter
const userRouter = require('./routes/user.route');
const productRouter = require('./routes/product.route');
const orderRouter = require('./routes/order.route');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/users',userRouter);
app.use('/products',productRouter);
app.use('/orders',orderRouter);

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Express Web Server</h1>");
});

app.listen(port,()=>{
    console.log(`Server has started at ${port}`);
});
