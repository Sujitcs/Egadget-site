import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export const Admin = () => {
const [name, setName] = useState("");
const [desc, setDesc] = useState("");
const [oldPrice, setOldPrice] = useState("");
const [newPrice, setNewPrice] = useState("");
const [category, setCategory] = useState("");
const [imag, setImage] = useState(null);
const [allData, setAllData] = useState();
const [srch, setSrch] = useState([]);
const [flag, setFlag] = useState(false);




//get api fetch all data
function show()
{
  if(flag)
  setFlag(false);
  else
  setFlag(true);

  axios
    .get('http://localhost:8080/products/list')
    .then((res) => {
      console.log(res.data);
      if(res.data)
      {
          setAllData(res.data);
          console.log(res.data);
      }
      

    })
    .catch((err) => {
      console.log(err);
    });

    

  }

function search(e)
{
  var sw = e.target.value;
  var newSer = allData.filter((w) => w.name.toLowerCase().includes(sw.toLowerCase()));
  setSrch(newSer);
  
}

// save new product function post api
function saveProduct()
{

  const newFrm = new FormData();
  newFrm.append('name',name);
  newFrm.append('desc',desc);
  newFrm.append('oldprice',oldPrice);
  newFrm.append('newprice',newPrice);
  newFrm.append('category',category);
  newFrm.append('product_pic',imag);

  
  console.log(newFrm);
  axios.post('http://localhost:8080/products/add',newFrm)
  .then(
      (res)=>{
          console.log(res.data);
          
      }
  )
  .catch(
      (err)=>{
          console.log(err);
      }
  )
}

//edit function update api
// function edit(dt)
// {
//   document.getElementById("name").innerText = dt.name;
//   document.getElementById("desc").innerText = dt.description;
//   document.getElementById("oldprice").innerText = dt.newprice;
//   document.getElementById("newprice").innerText = dt.oldPrice;
//   document.getElementById("cat").value = dt.category;

// console.log(dt.name);
  

  // axios.post(`http://localhost:8080/products/edit/${dt._id}`,)
  // .then(
  //     (res)=>{
  //         console.log(res.data);
          
  //     }
  // )
  // .catch(
  //     (err)=>{
  //         console.log(err);
  //     }
  // )


// }

//api delete call

// function del(id)
// {
  
  
//   axios.delete(`http://localhost:8080/products/del/${id}`)
//   .then(
//       (res)=>{
//           console.log(res.data);

          
//       }
//   )
//   .catch(
//       (err)=>{
//           console.log(err);
//       }
//   )
// }

  return (
    <div>
      <div>
        <h4>Enter Product details here:</h4>
      <label>Name of the Product : </label>
      <input type="text" id='name' value={name} onChange={(e)=>{setName(e.target.value)}} /> <br />
      <label>Description of the Product : </label>
      <input type="text" id='desc' value={desc} onChange={(e)=>{setDesc(e.target.value)}} /> <br />
      <label>Old Price : </label>
      <input type="text" id='oldprice' value={oldPrice} onChange={(e)=>{setOldPrice(e.target.value)}} /> <br />
      <label>New Price : </label>
      <input type="text" id='newprice' value={newPrice} onChange={(e)=>{setNewPrice(e.target.value)}} /> <br />
      <label> Category : </label>
      <select value={category} id='cat' onChange={(e)=>{setCategory(e.target.value)}}>
        <option value="">select here</option>
        <option value="Smart Watch">Smart Watch</option>
        <option value="Smart Phone">Smart Phone</option>
        <option value="Speaker & HeadPhone">Speaker and HeadPhone</option>
      </select> <br />
      <label>Select a Product Image : </label>
      <input type="file" name='product_pic' onChange={(e)=>{setImage(e.target.files[0]); console.log(imag) }}/> <br />
      <button onClick={saveProduct}>Save</button> <br /> <br />
      
      </div>
      <Link to='/orderlist'><h4>All order</h4></Link>
      <h4>All Products</h4>
      <div>
        <button onClick={show}>{flag?(<b>hide</b>):(<b>Show More options</b>)}</button>
        { flag?
        (<div>
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
                        <td> <button>Delete</button></td>
                        </tr>
                      )
                    })
                }
            
            
         </table>
        </div>) : (null)
        }
    </div>

    </div>
  )
}
