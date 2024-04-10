import React from "react";
import './Popular.css';
import data_product from '../Assets/data';
import Item from "../Item/Item";
function Popular(){
    return(
        <>
            <div className="popular">
            <h1>Popular in SmartWatches</h1> 
            <hr/>
            <div className="popular-item">
                {data_product.map((it,i)=>{
                return <Item key={i} id={it.id} name={it.name} image={it.image} new_price={it.new_price} old_price={it.old_price}/> 
                })}
            </div>
            </div>
        </> 
    )
}
export default Popular;