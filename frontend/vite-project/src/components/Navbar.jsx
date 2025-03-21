import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          JATS XML Editor
        </Typography>
        <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
        <Link to="/projects" style={{ color: 'white', marginRight: '20px' }}>Projects</Link>
        <Link to="/journals" style={{ color: 'white', marginRight: '20px' }}>Journals</Link>
        <Link to="/articles" style={{ color: 'white' }}>Articles</Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
