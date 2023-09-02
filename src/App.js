import './App.css';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import SignUp from './components/Signup.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/' element={<h1>Its home</h1>}/>
            <Route path='/add' element={<h1>add item here</h1>}/>
            <Route path='/update' element={<h1>update item here</h1>}/>
            <Route path='/logout' element={<h1>logout form here</h1>}/>
            <Route path='/profile' element={<h1>profile :</h1>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
