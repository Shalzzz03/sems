import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';


const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
    <div>
    <Button variant="contained" onClick={() => navigate("/adminLogin")}>Admin Login</Button>
    <Button variant="contained" onClick={() => navigate("/main")}>User Login</Button>
    <p/>
    </div>
    </>
    
  )
}

export default Home
