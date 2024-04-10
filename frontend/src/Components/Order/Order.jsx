import React from 'react';
import { Link } from "react-router-dom";

function Order() {

   
  return (
    <div>
        order id: {localStorage.getItem('newOrder')} <br />
        <p style={{border:2, color:'green', fontSize:'large'}}>order successfully placed</p>
       <Link to='/'> <button onClick={()=>{localStorage.removeItem('newOrder')}}>OK</button></Link>
    </div>
  )
}

export default Order