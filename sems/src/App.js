import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

// import  from 'react-router-dom';
import Home from './Home';
import DataDisplay from './DataDisplay';
import AdminLogin from './AdminLogin';
import ScannerForm from './Borrow/ScannerForm';


function App() {
  return (
    <>
    {/* <Home/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/main" element={<DataDisplay/>} />
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/scannerform" element={<ScannerForm/>}/>
      </Routes>
    </BrowserRouter>
    
    {/* <Main/> */}
    </> 
  );
}

export default App;
