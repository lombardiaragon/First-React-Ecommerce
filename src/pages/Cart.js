import {useContext} from 'react';
import { CartContext } from '../context/CartContext';

const Cart=()=>{
    const{cartListItems}=useContext(CartContext)
    console.log('cartListItems Cart',cartListItems)

    return(
        <div>
            <h4>Carrito</h4>
            {cartListItems.map((item)=>{
                const{pictureUrl,title,id,price}=item
                return(
                    <div key={id}>
                        <img src={`./${pictureUrl}`} alt='ropa'/>
                        <h4>{title}</h4>
                        <span>${price}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart