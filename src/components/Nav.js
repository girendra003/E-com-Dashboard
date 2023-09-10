import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import infi from '../images/logoo.png'

const Nav=(props)=>{
    const auth = sessionStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        sessionStorage.clear();
        navigate('/signup');
    };
    return(
        <div>
            <img className='logoInfi' src={infi} alt="Simple logo" />
            {auth ?
            <ul className='nav-ul'>
                <li><Link to={'/'}>Product</Link></li>
                <li><Link to={'/add'}>Add Product</Link></li>
                <li><Link to={'/update'}>Update Product</Link></li>
                <li><Link to={'/profile'}>Profile</Link></li>
                <li><Link onClick={logout} to={'/signup'}>Logout ({JSON.parse(auth).name})</Link> </li>
            </ul>
            :
            <ul className='nav-ul log-Sign' style={{"justify-content": "flex-end"}}>
                <li><Link to={'/signup'}>Signup</Link></li>
                <li>{auth?"":<Link to={'/login'}>Login</Link>}</li>
            </ul>
}
        </div>
    
    )
}

export default Nav;