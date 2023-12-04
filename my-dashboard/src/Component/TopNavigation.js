// NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import "./TopNavigation.css";

const NavBar = () => {
  return (
    <div id="mainNav">
      <div id="nav">
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          App Logo
        </Typography>
        <Link to="/dashboard"><Button variant="contained" color="warning">
          Dashboard
        </Button></Link>
        <Link to="/createad"><Button color="warning" variant="contained">
          Create Ad
        </Button></Link>
      </Toolbar>
    </AppBar>
    </div>
      <br/><br/>
       <h1 style={{color:'black'}}>Welcome To Advertisement Editor</h1>
    </div>
  );
};

export default NavBar;

