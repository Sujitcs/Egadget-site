import React, { useContext } from "react";
import './Cartitems.css';
import { Shopcontext } from "../../Context/Shopcontext";
import { Link } from "react-router-dom";
import axios from 'axios';

import remove_icon from "../Assets/cart_cross_icon.png";
function Cartitems(){
    const {getTotalCartAmount,all_product,cartItems,removefromCart}=useContext(Shopcontext);
    // const [productid, setProductid] = useState("");
    // const [userid, setUserid] = useState("");
    function detailOrder()
    {
        
       
       //setProductid();
       
        // setUserid(localStorage.getItem('userid'));
        // console.log(localStorage.getItem('userid'));
        // console.log(productid);
        // console.log(userid);

        axios.post(`http://localhost:8080/orders/buy/${"65488fb06259557e152bb273"}/${localStorage.getItem('userid')}`)
       .then(
        (res)=>{
          console.log(res.data);
          localStorage.setItem('newOrder',res.data.orderInfo._id);
        }
        )
     .catch(
         (err)=>{
             console.log(err);
       }
        )
    }
    return(
        <>
            <div className="cartitems">
              <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>  
            <hr />
                {all_product.map((e)=>{
                    if(cartItems[e.id]>0){
                        return  <div>

                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className="carticon-product-icon"/>
                            <p >{e.name}</p>
                            
                            <p>${e.new_price}</p>
                            
                            <button className="cartitems-quantity">{cartItems[e.id]} </button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className="cartitems-remove-icon" alt='' src={remove_icon} onClick={()=>{removefromCart(e.id)}}/>
                            <p id="pick">{e.id}</p>
                        </div>
                        <hr />
                    </div>
                    }
                    else{
                        return null;
                    }
                })}
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>Cart totals</h1>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <p>Shipping fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <Link to='/Order'> <button onClick={detailOrder}>PROCEED TO CHECKOUT</button></Link>
                    </div>
                </div>
            </div>
                

        
        </>
    )
}
export default Cartitems