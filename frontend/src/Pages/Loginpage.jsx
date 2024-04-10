import React, { useState } from "react";
import './CSS/Loginpagr.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Loginpage(){
    const [email,setEmail] = useState("");
    const [pass1, setPass1] = useState("");


    function login()
    {

        // const newFrm = new FormData();
        // newFrm.append('email',email);
        // newFrm.append('pass1',pass1);
       // console.log(email,pass1);

        axios.post('http://localhost:8080/users/signin',{email:email,pass1:pass1})
        .then(
                (res)=>{
                        console.log(res.data.userInfo._id, res.data.userInfo.name, res.data.userInfo.email, res.data.userInfo.role);
                        localStorage.setItem('userid',res.data.userInfo._id);
                        localStorage.setItem('name',res.data.userInfo.name);
                        localStorage.setItem('email',res.data.userInfo.email);
                        localStorage.setItem('role',res.data.userInfo.role);
          
                        }
            )
        .catch(
                    (err)=>{
                        console.log(err);
                        }
            )
    }

    return(
        <>
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Log In</h1>
                <div className="loginsignup-fields">
                    
                    <input type="email" placeholder="Email address" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="password" placeholder="Password" value={pass1} onChange={(e)=>{setPass1(e.target.value)}}/>
                </div>
                <button onClick={login}><Link style={{textDecoration: 'none',color:'white'}} to='/'>Continue</Link></button>
                <p className="loginsignup-login">Do not have an account?<Link   style={{textDecoration: 'none'}} to='/signin'> <span> Signup here</span></Link> </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/> 
                    <p>By continuing I agree to the terms of use and privacy policy</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Loginpage;