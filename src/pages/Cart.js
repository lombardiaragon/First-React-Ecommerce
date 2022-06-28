import Modal from '../components/Modal/Modal'
import {useContext,useState} from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.scss'
import '../components/Modal/Modal.scss'

const Cart=()=>{
    const[showCartModal,setShowCartModal]=useState(false)
    const{cartListItems}=useContext(CartContext)

    let mapPrices=cartListItems.map(item=>item.price*item.quantitySelected)
    let totalAcc=mapPrices.reduce((acc,prices)=>acc+prices,0)
    
    return(
        <div>
            <h4>Carrito</h4>
            {cartListItems.map((item)=>{
                const{pictureUrl,title,id,price}=item
                return(
                    <div key={id} className='cartView'>
                        <div className='cartView__divImg'>
                            <img src={`./${pictureUrl}`} alt='ropa'/>
                        </div>
                        <h4>{title}</h4>
                        <span>Precio Unitario: ${price}</span>
                        <span>Cantidad</span>
                        <span>Precio Total: ${price}</span>
                        <button className='deleteItem'>x</button>
                    </div>
                )
            })}
            <div className="cartResume">
                <p>Total</p>
                <span>${totalAcc}</span>
                <button onClick={()=>setShowCartModal(!showCartModal)}>COMPRAR</button>
             </div>  
           
            {showCartModal &&
                <Modal showCartModal={showCartModal} setShowCartModal={setShowCartModal}>
                    <div className='modalCart'>
                        <img src='./shoppingOnline.svg' alt='shopping'/>
                        <form className='formCart'>
                            <h3>Formulario de confirmacíon de compra</h3>
                            <input placeholder='Nombre y Apellido'></input>
                            <input placeholder='Teléfono'></input>
                            <input placeholder='Dirección'></input>
                            <input placeholder='Email'></input>
                        </form>
                    </div>
                </Modal>
            }
        </div>
    )
}

export default Cart