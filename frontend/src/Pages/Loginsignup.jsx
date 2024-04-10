import React, { useState } from "react";
import './CSS/Loginsignup.css';
import { Link } from "react-router-dom";
function Loginsignup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");

    function saveUser()
    {
        let data = {name, email, pass1};

        fetch("http://localhost:8080/users/signup",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            
        })
    }

    return(
        <>
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign up</h1>
                <div className="loginsignup-fields">
                    <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Your name"/>
                    <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email address"/>
                    <input type="password" name="pass1" value={pass1} onChange={(e)=>{setPass1(e.target.value)}} placeholder="Password"/>
                </div>
                <button><Link style={{textDecoration: 'none',color:'white'}} onClick={saveUser} to='/signin'>Continue</Link></button>
                <p className="loginsignup-login">Already have an account? <Link  style={{textDecoration: 'none'}} to='/signin'><span>Login here</span></Link></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/> 
                    <p>By continuing I agree to the terms of use and privacy policy</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Loginsignup;