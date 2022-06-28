import * as React from 'react';
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';
import HomeIcon from '@mui/icons-material/Home';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import HelpIcon from '@mui/icons-material/Help';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
const NavBar=()=>{
    return(
        <section className='NavBar'>
            <div className='divLogo'>
                <Link to={'/'}><img src='./logoFedeClaro.svg' alt='imageLogo' className='imageLogo'/></Link>
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
    )
}

export default NavBar