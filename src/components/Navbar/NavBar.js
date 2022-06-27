import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './NavBar.scss'

const NavBar=()=>{
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='navBar'>
                <div className='divLogo'>
                    <img src='./logoFedePrueba.svg' alt='imageLogo' className='imageLogo'/>
                </div>
                <div className='divMenu'>
                    <ul>
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Ayuda</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div className='divCartLogin'>Login</div>
            </AppBar>
        </Box>
    )
}

export default NavBar