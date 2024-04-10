import React, {useEffect, useState} from 'react';
import axios from 'axios';


function AllProduct() {
const [allData, setAllData] = useState();
const [srch, setSrch] = useState([]);

    useEffect(() => {
   
        axios
          .get('http://localhost:8080/products/list')
          .then((res) => {
            console.log(res.data);
            if(res.data)
            {
                setAllData(res.data);
            }
            
  
          })
          .catch((err) => {
            console.log(err);
          });
      
    }, [allData]);

    function search(e)
    {
        var sw = e.target.value;
        var newSer = allData.filter((w) => w.name.toLowerCase().includes(sw.toLowerCase()));
        setSrch(newSer);
        
    }



  return (
    <div>
        <label>Search by name : </label>
        <input type="text" placeholder='name of the product' onChange={search}/>
        <table border={2}>
            <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>New Price</th>
                    <th>Old Price</th>
                    <th>Product Pic</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Options</th>
            </tr>
           
                {
                    srch.map((d,index)=>{
                      return( <tr key={index}>
                        <td>{d._id}</td>
                        <td >{d.name}</td>
                        <td >{d.newprice}</td>
                        <td>{d.oldprice}</td>
                        <td >{<img src={d.product_pic} alt="" height="50px" width="25px"/>}</td>
                        <td >{d.description}</td>
                        <td >{d.category}</td>
                        <td><button>Edit</button> || <button>Delete</button></td>
                        </tr>
                      )
                    })
                }
            
            
        </table>
    </div>
  )
}

export default AllProduct;