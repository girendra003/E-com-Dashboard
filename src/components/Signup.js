import React, { useState, useEffect } from "react";
// import React,{useState} from "react";
import { useNavigate } from "react-router-dom";



const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const nevigate = useNavigate();


    //authentication *******************
    const Navigate = useNavigate();
    useEffect(() => {
        let auth = sessionStorage.getItem('user');
        if (auth) {
            Navigate('/')
        }
    },[Navigate])


    //Sending data to database  **************************
    const colletData = async () => {
        if(name && email && password){
        let result = await fetch('http://localhost:4000/api/users/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        result = await result.json();
        console.log(result);
        sessionStorage.setItem('user', JSON.stringify(result.result));
        sessionStorage.setItem('token', JSON.stringify(result.auth));
        if (result) {
            nevigate('/')
        }
    }else{
        alert('Please enter credentials');
    }

    }
    //******************************************************* */
    return (
        <div >
            <form action="" className="SignupForm">
                <h1>Register</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

                <input type="password" value={password} onChange={(e) => setPass(e.target.value)} placeholder="Enter password" />

                <button type="button" onClick={colletData}>Sign Up</button>
            </form>
            <br />
        </div>
    )
}
export default Signup;