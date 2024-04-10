import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
function Orderlist() {
  const [allOrder, setAllorder] = useState([]);
    useEffect(
        ()=>{
          axios
          .get('http://localhost:8080/orders/all')
          .then((res) => {
                    console.log(res.data);
                    setAllorder(res.data);
    
            })
            .catch((err) => {
                   console.log(err);
              });
        }
    )
  return ( 
    <div>
      all order:
      <ul>
        {allOrder.map((e)=>{
            return <>
                --------- ------ <br />
                Order Id : {e.order_id} <br />
                Order By : {e.customer} <br />
                Email Id : {e.email} <br />
                Order Status : {e.status}
                <br />
                <br />
                -----------------------------------------------------------------------------
            </>
        })}
      </ul>
    </div>
  )
}
 
export default Orderlist