import Modal from '../components/Modal/Modal'
import {useContext,useState} from 'react';
import { CartContext } from '../context/CartContext';
// import './Cart.scss'
// import '../components/Modal/Modal.scss'
// import '../App.scss'
import '../scss/index.scss'


const Cart=()=>{
    const[showCartModal,setShowCartModal]=useState(false)
    const{cartListItems,quitFromCart}=useContext(CartContext)

    let mapPrices=cartListItems.map(item=>item.price*item.quantitySelected)
    let totalAcc=mapPrices.reduce((acc,prices)=>acc+prices,0)

    return(
        <div>
            <h4>Carrito</h4>
            {cartListItems.length===0 ?
            (<h3>NO HAY PRODUCTOS EN EL CARRITO</h3>)
            :
            (<div>
                {cartListItems.map((item)=>{
                    const{pictureUrl,title,id,price,quantitySelected}=item
                    return(
                        <div key={id} className='cartView'>
                            <div className='cartView__divImg'>
                                <img src={`./${pictureUrl}`} alt='ropa'/>
                            </div>
                            <h4>{title}</h4>
                            <span>Precio Unitario: ${price}</span>
                            <span>Cantidad: {quantitySelected}</span>
                            <span>Precio Total: ${price*quantitySelected}</span>
                            <button onClick={()=>quitFromCart(item)} className='deleteItem'>x</button>
                        </div>
                    )
                })}
                <div className="cartResume">
                    <p>Total</p>
                    <span>${totalAcc}</span>
                    <button onClick={()=>setShowCartModal(!showCartModal)} className='btnGlobal btnBuy'>COMPRAR</button>
                </div>  
            </div>)
            }
            
            {showCartModal &&
                <Modal showCartModal={showCartModal} setShowCartModal={setShowCartModal}>
                    <div className='modalCart'>
                        <img src='./shopping.png' alt='shopping'/>
                        <form className='formCart'>
                            <h3>Formulario de confirmacíon de compra</h3>
                            <input placeholder='Nombre y Apellido'></input>
                            <input placeholder='Teléfono'></input>
                            <input placeholder='Dirección'></input>
                            <input placeholder='Email'></input>
                            <button className='btnGlobal btnSendForm'>Enviar</button>
                        </form>
                    </div>
                </Modal>
            }
        </div>
    )
}

export default Cart