import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import Newcollections from "../Components/Newcollections/Newcollections";
function Shop(){
    return(
        <>
        <Hero/>
        <Popular/> 
        <Offers/>
        <Newcollections/>
        </>
    )
}
export default Shop;