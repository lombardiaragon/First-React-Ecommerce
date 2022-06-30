import * as React from 'react';
import '../../scss/index.scss';
import CartWidget from '../CartWidget/CartWidget';
import HomeIcon from '@mui/icons-material/Home';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import HelpIcon from '@mui/icons-material/Help';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar=()=>{
    const [showCategorys,SetshowCategorys]=useState(false)
    // console.log('showCategorys',showCategorys)
    const[showCartWidget,setShowCartWidget]=useState(false)
    console.log('showCartWidget',showCartWidget)
    return(
        <section className='NavBar'>
            <div className='NavBar__divLogo'>
                <Link to={'/'} className='linkDecoration '><img src='/logoClaroFede.png' alt='Logo' className='imgLogo' /></Link>
            </div>
            <div className='NavBar__divMenu'>
                <ul>
                    <Link to={'/'} className='linkDecoration'><li><HomeIcon/><span>Inicio</span></li></Link>
                    <li onClick={()=>SetshowCategorys(!showCategorys)} className='productos'><CheckroomIcon/><span>Productos</span>
                        {showCategorys && 
                        <ul className='listSubCategory'>
                            <Link to={'productos/remeras'} className='linkDecoration'><li className='subCategory'>Remeras</li></Link>
                            <Link to={'productos/buzos'} className='linkDecoration'><li className='subCategory'>Buzos</li></Link>
                            <Link to={'productos/pantalones'} className='linkDecoration'><li className='subCategory'>Pantalones</li></Link>
                        </ul>
                        }
                    </li>
                    <li><HelpIcon/><span>Ayuda</span></li>
                    <Link to={'/contacto'} className='linkDecoration'><li><MailIcon/><span>Contacto</span></li></Link>
                </ul>
                
            </div>
            <div className='NavBar__divCartLogin'>
                <ul>
                    <li onClick={()=>setShowCartWidget(!showCartWidget)}>
                        <ShoppingCartIcon/> 
                    </li>
                    <li><PersonIcon/></li>
                </ul>
            </div>
            {showCartWidget && <CartWidget showCartWidget={showCartWidget} setShowCartWidget={setShowCartWidget}/>  }
        </section>            
    )
}

export default NavBar