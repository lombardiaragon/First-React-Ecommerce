// import '../NavBar/NavBar.scss'
// import './CartWidget.scss'
// import '../../App.scss'
import '../../scss/index.scss'
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget=({showCartWidget,setShowCartWidget})=>{
    const {cartListItems,quitFromCart}=useContext(CartContext)
    console.log(showCartWidget)
    return(
        <div>
            {showCartWidget &&
                (
                <div className='cartWidgetContainer'>
                    <div className='cartWidgetContainer__divInfo'  onMouseLeave={()=>setShowCartWidget(!showCartWidget)}>
                        <h3>CartWidget</h3>
                        {cartListItems.length===0 ?
                         (<h3>NO HAY PRODUCTOS EN EL CARRITO</h3>)
                        :
                        (<div>
                              {cartListItems.map((cartItem)=>{
                                const{title,id,pictureUrl,price,quantitySelected}=cartItem
                                return(
                                    <div key={id} className='cartWidgetItems'>
                                        <div className='cartWidgetItems__divImg'>
                                            <img src={`/${pictureUrl}`} alt='ropa'/>
                                        </div>
                                        <div className='cartWidgetItems__divInfo'>
                                            <p>{title}</p>
                                            <span>Cantidad: {quantitySelected}</span>
                                            <span>Total: ${price*quantitySelected}</span>
                                        </div>
                                        <button onClick={()=>quitFromCart(cartItem)} className='btnX'>x</button>
                                    </div>
                                )
                             })}
                                <div className='CWtotalResume'>
                                    <p>Total: $...........</p>
                                </div>
                                <div >
                                    <Link to={'/carrito'}>
                                        <button className='btnGlobal' onClick={()=>setShowCartWidget(!showCartWidget)}>Terminar Compra</button>
                                    </Link>
                                </div>
                            </div>)
                        }
                        <button onClick={()=>setShowCartWidget(!showCartWidget)} className='closeCartWidget'>X</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default CartWidget