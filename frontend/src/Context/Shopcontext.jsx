import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
export const Shopcontext=createContext(null);


const getDefaultCart =()=>{
    let cart={};
    for(let index=0; index<all_product.length+1;index++){
        cart[index]=0;
    }
    return cart;
}


const ShopcontextProvider=(props)=>{

    
    const[cartItems,setcartItems]=useState(getDefaultCart());
    
   const addToCart = (itemmid)=>{
        setcartItems((prev)=>({...prev,[itemmid]:prev[itemmid]+1}))
   }
   
   const removefromCart = (itemmid)=>{
    setcartItems((prev)=>({...prev,[itemmid]:prev[itemmid]-1}))
}
const getTotalCartAmount = ()=>{
    let totalAmount=0;
    for(const item in cartItems){
        if(cartItems[Number(item)]>0){
            let itemInfo=all_product.find((product)=>product.id===Number(item))
            totalAmount = totalAmount+(itemInfo.new_price * cartItems[Number(item)]);
        }
       
        
    }
    return totalAmount;
}
// const getTotalCartItems=()=>{
//     let totaItem=0;
//     for(const item in cartItems){
//         if(cartItems[item]>0){
//             totaItem += cartItems[item];
//         }
      
//     }
//     return totaItem;

const contextValue ={getTotalCartAmount,all_product,cartItems,addToCart,removefromCart};
    return (
        <>
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
        </>
    )
}
export default ShopcontextProvider;
