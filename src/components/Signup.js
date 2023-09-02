import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
const Signup=()=>{
    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPass] =useState('');
    const nevigate = useNavigate();

    const colletData=async()=>{
        let result =await fetch('http://localhost:3003/myweb1',{
            method:'POST' , 
            body : JSON.stringify({ name, email, password }),
            headers: {'Content-Type':'application/json'}
        })
        result = await result.json();
        console.log(result);
        if(result){
            nevigate('/')
        }
    }
    return(
        <div >
            <form action="" className="SignupForm">
                <h1>Register</h1>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />

                <input type="email"value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />

                <input type="password" value={password} onChange={(e)=>setPass(e.target.value)} placeholder="Enter password" />

                <button type="button" onClick={colletData}>Sign Up</button>
            </form>
        </div>
    )
}
export default Signup;