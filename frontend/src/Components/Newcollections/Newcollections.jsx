import React from "react";
import './Newcollections.css';
import new_collection from '../Assets/new_collections'
import Item from "../Item/Item";
function Newcollections(){
    return(
        <>
         <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((it,i)=>{
                    return <Item key={i} id={it.id} name={it.name} image={it.image} new_price={it.new_price} old_price={it.old_price}/>
                }

                )}
            </div>
         </div>
        </>
    )
}
export default Newcollections;