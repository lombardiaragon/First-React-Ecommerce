import Modal from '../components/Modal'
import {useContext,useState} from 'react';
import { CartContext } from '../context/CartContext';
import '../scss/index.scss'
import {collection,addDoc} from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { useNavigate } from 'react-router-dom';


const Cart=()=>{
    const[showCartModal,setShowCartModal]=useState(false)
    const{totalAcc,cartListItems,setCartListItems,quitFromCart}=useContext(CartContext)

    const [formValue, setFormValue] = useState({
        user: '',
        phone: '',
        direction: '',
        email: '',
        validEmail:''
    })
    const [order, setOrder] = useState({
        date: new Date(),
        buyer: {},
        items: cartListItems.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                quantitySelected: item.quantitySelected
            }
        } ),
        total: totalAcc
    })

    const [success, setSuccess] = useState()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
            setOrder({...order, buyer: formValue})
            sendOrder({...order, buyer: formValue})
            setCartListItems([])
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const finishOrder = () => {
        navigate('/')
    }

    const sendOrder = async (newOrder) => {
        const ordersCollectionFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(ordersCollectionFirebase, newOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccess(orderDoc.id)
    }

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
                    { success ?
                    ( <div className='modalCart buyingConfirmation'>
                        <img src='./shopping.png' alt='shopping'/>
                        <h3>Formulario de confirmacíon de compra</h3>
                        Orden generada!
                        Numero de orden: {success}
                        <div>
                            <button onClick={finishOrder} className='btnGlobal btnSendForm'>Aceptar</button>
                        </div>
                    </div>
                    )
                    :
                    (<div className='modalCart'>
                        <img src='./shopping.png' alt='shopping'/>
                        <form className='formCart' onSubmit={handleSubmit}>
                            <h3>Formulario de confirmacíon de compra</h3>
                            <input 
                            placeholder='Nombre y Apellido'
                            name='user'
                            value={formValue.name} 
                            onChange={handleChange}
                            required
                            />
                            <input
                            placeholder='Teléfono' 
                            name='phone'
                            value={formValue.phone} 
                            onChange={handleChange}
                            required
                            />
                            <input
                            placeholder='Dirección'
                            name='direction'
                            value={formValue.direction} 
                            onChange={handleChange}
                            required
                            />
                            <input
                            placeholder='Email' 
                            name='email'
                            value={formValue.email} 
                            onChange={handleChange}
                            required
                            pattern={`${formValue.validEmail}`}
                            />
                            <input
                            placeholder='Validar Email' 
                            name='validEmail'
                            value={formValue.validEmail} 
                            onChange={handleChange}
                            required
                            pattern={`${formValue.email}`}
                            />
                            <button type='submit' className='btnGlobal btnSendForm'>Realizar compra</button>
                        </form>
                    </div>)
                    }
                </Modal>
            }
        </div>
    )
}

export default Cart