import './App.css';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import SignUp from './components/Signup.js';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import Product from './components/Product';
import UdpateProduct from './components/UdpateProduct';
import Profile from './components/Admin_Profile';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route element={<PrivateComponent/>}>
            <Route path='/' element={<Product/>}/>
            <Route path='/add' element={<AddProduct/>}/>
            <Route path='/update/:id' element={<UdpateProduct/>}/>
            <Route path='/profile' element={<Profile/>}/>
            </Route>
            
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
