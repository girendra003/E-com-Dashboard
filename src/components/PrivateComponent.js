import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const PrivateComponent =()=>{
        const auth = sessionStorage.getItem('user');
        return auth?<Outlet/>:<Navigate to="/signup" />
}

export default PrivateComponent;