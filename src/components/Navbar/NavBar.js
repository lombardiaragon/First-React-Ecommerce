import * as React from 'react';
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';
import HomeIcon from '@mui/icons-material/Home';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import HelpIcon from '@mui/icons-material/Help';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../../App.scss'

const NavBar=()=>{
    const [showCategorys,SetshowCategorys]=useState(false)
    console.log('showCategorys',showCategorys)

    return(
        <section className='NavBar'>
            <div className='divLogo'>
                <Link to={'/'} className='linkDecoration'><img src='/logoFedeClaro.svg' alt='imageLogo' className='imageLogo'/></Link>
            </div>
            <div className='divMenu'>
                <ul>
                    <Link to={'/'} className='linkDecoration'><li><HomeIcon/><span>Inicio</span></li></Link>
                    <li onClick={()=>SetshowCategorys(!showCategorys)} className='productos'><CheckroomIcon/><span>Productos</span>
                        {showCategorys && 
                        <ul className='productsSubCategory'>
                            <li className='subCategory'><Link to={'productos/remeras'} className='linkDecoration'>Remeras</Link></li>
                            <li className='subCategory'><Link to={'productos/buzos'} className='linkDecoration'>Buzos</Link></li>
                            <li className='subCategory'><Link to={'productos/pantalones'} className='linkDecoration'>Pantalones</Link></li>
                        </ul>
                        }
                    </li>
                    <li><HelpIcon/><span>Ayuda</span></li>
                    <Link to={'/contacto'} className='linkDecoration'><li><MailIcon/><span>Contacto</span></li></Link>
                </ul>
                
            </div>
            <div className='divCartLogin'>
                <ul>
                    <Link to={'/carrito'} className='linkDecoration'><li><CartWidget/></li></Link>
                    <li><PersonIcon/></li>
                </ul>
            </div>
        </section>            
    )
}

export default NavBar