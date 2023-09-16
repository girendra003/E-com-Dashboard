import React, { useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setmail] = useState('');
  const [password,setPassword] = useState('');
//=------------------conditions=------------------------
    const navigate = useNavigate();
    useEffect(() => {
        let auth = sessionStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    },[navigate])

//=----------------confirming data form database------------------------
      const collectData = async()=>{
        const info = await fetch('http://localhost:4000/login',(
          {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body : JSON.stringify({email,password})
          }
        )),

        data=await  info.json();
        console.log(data);
        if(data.user.email===email){
          sessionStorage.setItem('user',JSON.stringify(data.user));
          sessionStorage.setItem('token',JSON.stringify(data.auth));
          navigate('/')
        }
        else if(data.result==='404'){
          alert("Invalid Credentials")
        }
        else{
          alert ("Please fill all details");
        }
      }

  return (
  <>
      <div className="login">
        <h1>!! Login !!</h1>
          <input type="email" onChange={(e)=>setmail(e.target.value)} placeholder="Enter your email id !!!" />
          <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password !!!" />
          <button id="login-btn" onClick={collectData}>Login</button>
      </div>
    </>
  );
};

export default Login;
