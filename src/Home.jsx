import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';
import Navbar from './navbar/Navbar'


const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <br />
    <div>
      
    <Button variant="contained" onClick={() => navigate("/adminLogin")}>Admin Login</Button>
    <Button variant="contained" onClick={() => navigate("/main")}>User Login</Button>
    <p/>
    </div>
    </>
    
  )
}

export default Home
