import React, { useContext } from "react";
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { Shopcontext } from "../../Context/Shopcontext";
function ProductDisplay(props){
    const {product}=props;
    const {addToCart}=useContext(Shopcontext);
    return(
        <>
        <div className="productdisplay">
            <div className="productdisplay-left">
               <div className="productdisplay-img-list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div> 
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt=""/>
                </div>
            </div>
            <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="productdisplay-right-star">
                        <img src={star_icon} alt=""/>
                        <img src={star_icon} alt=""/>
                        <img src={star_icon} alt=""/>
                        <img src={star_icon} alt=""/>
                        <img src={star_dull_icon} alt=""/>
                        <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">
                            ${product.old_price}
                        </div>
                        <div className="productdisplay-right-price-new">
                            ${product.new_price}
                        </div>

                    </div>
                    <div className="productdisplay-right-description">
                     BoAt Nirvana 751 ANC Hybrid Active Noise Cancelling Bluetooth Wireless Over Ear Headphones with Up to 65H Playtime, ASAP Charge, Ambient Sound Mode, Immersive Sound, Carry Pouch(Gunmetal Grey)
                    </div>
                    <div className="product-display-right-size">
                        <h1>Select color</h1>
                        <div className="product-display-right-sizes">
                            <div>Red</div>
                            <div>Black</div>
                            <div>White</div>
                            <div>Green</div>
                            <div>Yellow</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                    <p className="product-display-right-category"><span>Tags :</span>Modern,Trendy</p>
            </div>

        </div>

        </>
    )
}
export default ProductDisplay;
