import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {Stack} from '@mui/material'
import { useState , useEffect } from "react";
import gify from './Images/gif.gif'
import './App.css'
import AppRoutes from "./AppRoutes";


const App = () => {
const[loading,setLoading]=useState(true)
useEffect(()=>{
  const timeoutId = setTimeout(() => {
    setLoading(false)
  }, 1500);
     // Cleanup function to clear the timeout on component unmount
     return () => clearTimeout(timeoutId);
},[])
  return (
    <div>
          {loading?( 
          <Stack justifyContent="center" alignItems="center" height="100vh">
            <img className="gif" src={gify} width="55%" alt="gif"  height='70%' />
            </Stack>
      ):  
      <Router>
     <AppRoutes/>
    </Router>
    
}
    </div>
  ) 
};

export default App;