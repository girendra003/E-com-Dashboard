import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Nav=(props)=>{
    const auth = sessionStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        sessionStorage.clear();
        navigate('/signup');
    };
    return(
        <div>
            <ul className='nav-ul'>
                <li><Link to={'/'}>Product</Link></li>
                <li><Link to={'/add'}>Add Product</Link></li>
                <li><Link to={'/update'}>Update Product</Link></li>
                <li><Link to={'/profile'}>Profile</Link></li>
                <li>{auth ? <Link onClick={logout} to={'/signup'}>Logout</Link> : <Link to={'/signup'}>Signup</Link>}</li>
                <li>{auth?"":<Link to={'/login'}>Login</Link>}</li>
            </ul>
        </div>
    
    )
}

export default Nav;