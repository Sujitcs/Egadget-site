import React from "react";
import './Relatedproducts.css';
import data_product from "../Assets/data";
import Item from "../Item/Item";
function Relatedproducts(){
    return(
        <>
        <div className="relatedproducts">
            <h1>Related products</h1>
            <hr />
            <div className="relatedproducts-item">
                {data_product.map((it,i)=>{
                    return <Item key={i} id={it.id} name={it.name} image={it.image} new_price={it.new_price} old_price={it.old_price}/>
                })}
            </div>
        </div>

        </>
    )
}
export default Relatedproducts;