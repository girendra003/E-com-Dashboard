import './App.css';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import SignUp from './components/Signup.js';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route element={<PrivateComponent/>}>
            <Route path='/' element={<h1>Its home</h1>}/>
            <Route path='/add' element={<h1>add item here</h1>}/>
            <Route path='/update' element={<h1>update item here</h1>}/>
            <Route path='/profile' element={<h1>profile :</h1>}/>
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
