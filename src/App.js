import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

// import  from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import AdminLogin from './AdminLogin';
// import Main from './Main';

function App() {
  return (
    <>
    {/* <Home/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/main" element={<Main />} />
        <Route path="/adminlogin" element={<AdminLogin/>}/>
      </Routes>
    </BrowserRouter>
    
    {/* <Main/> */}
    </> 
  );
}

export default App;
