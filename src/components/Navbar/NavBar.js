import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';
import HomeIcon from '@mui/icons-material/Home';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import HelpIcon from '@mui/icons-material/Help';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';

const NavBar=()=>{
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <section className='NavBar'>
                    <div className='divLogo'>
                        <img src='./logoFedeClaro.svg' alt='imageLogo' className='imageLogo'/>
                    </div>
                    <div className='divMenu'>
                        <ul>
                            <li><HomeIcon/><span>Inicio</span></li>
                            <li><CheckroomIcon/><span>Productos</span></li>
                            <li><HelpIcon/><span>Ayuda</span></li>
                            <li><MailIcon/><span>Contacto</span></li>
                        </ul>
                    </div>
                    <div className='divCartLogin'>
                        <ul>
                            <li><CartWidget/></li>
                            <li><PersonIcon/></li>
                        </ul>
                    </div>
                </section>
            </AppBar>
        </Box>
    )
}

export default NavBar