import React,{  useEffect, useState} from "react";
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from "react-router-dom";
//import { Shopcontext } from "../../Context/Shopcontext";
function Navbar(){
    const [menu,setMenu]=useState("shop");
    // const [getTotalCartItems] =useContext(Shopcontext);
    const [flag,setFlag] = useState(true);
   
    useEffect(
        ()=>{
           if(localStorage.getItem('name'))
           {
            setFlag(false)
           }
           else{
            setFlag(true)
           }
                
        },[]
    )
   

    
    function lgOut()
    {
        localStorage.removeItem('userid');
        localStorage.removeItem('email');
        localStorage.removeItem('role');
        localStorage.removeItem('name');
       

    }

    
    return(
        <>
            <div className="navbar">
                 <div className="nav-logo">
                    <img src={logo} alt="logo" height={90} width={90}/>
                    <p>GADGETWORLD</p>
                        
                 </div>
                 <ul className="nav-menu" >
                    <li onClick={()=>{setMenu("shop")}}><b><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}  </b> </li>
                    <li onClick={()=>{setMenu("smartphones")}}><Link style={{textDecoration: 'none'}} to='/smartphones'>Smartphones</Link> {menu==="smartphones"?<hr/>:<></>}  </li>
                    <li onClick={()=>{setMenu("smartwatches")}}><Link style={{textDecoration: 'none'}} to='/smartwatches'>SmartWatches</Link>{menu==="smartwatches"?<hr/>:<></>}   </li>
                    <li onClick={()=>{setMenu("speakers&headphones")}}><Link style={{textDecoration: 'none'}} to='/speakers&headphones'>Speakers&Headphones</Link>{menu==="speakers&headphones"?<hr/>:<></>}   </li>
                   
                    {(localStorage.getItem('role')==='regular')?<li>{localStorage.getItem('name')}</li>:(null)}
                    {(localStorage.getItem('role')==='Admin')?(<li onClick={()=>{setMenu("admin")}}><Link style={{textDecoration: 'none'}} to='/Admin'>Admin</Link>{menu==="Admin"?<hr/>:<></>}   </li>):(null)}
                        
                   
                
                   </ul>
                 <div className="nav-login-cart">
                    {flag?(<Link to='/login'><button >LogIn</button></Link>):(<Link to='/'><button onClick={lgOut}>LogOut</button></Link>)}
                    <Link to='/cart'><img src={cart_icon} alt="carticon"/></Link>
                    {/* <div className="nav-cart-count"></div> */}
                 </div>
            </div>
        </>
    )
}
export default Navbar;