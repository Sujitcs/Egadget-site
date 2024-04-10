import React, { useContext } from "react";
import './CSS/Shopcategory.css';
import { Shopcontext } from "../Context/Shopcontext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
function ShopCategory(props){
    const {all_product}=useContext(Shopcontext);
    return(
       
        <>
        <div className="shop-category">
            <img className="shopcategory-banner"src={props.banner} alt="" height={200} width={200}/>
            <div className="shopcategory-indexSort">
                <p>
                    <span>
                        Showing 1-12
                    </span>
                    Out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className="shopcategory-products ">
                {all_product.map((it,i)=>{
                    if(props.category===it.category){
                        return <Item key={i} id={it.id} name={it.name} image={it.image} new_price={it.new_price} old_price={it.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore more
            </div>
        </div>
        
        </>
    )
}
export default ShopCategory;