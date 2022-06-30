import {useContext,useState} from 'react';
import { CartContext } from '../../context/CartContext';

import '../../scss/index.scss'



const ItemCount=({product,hiddenItemCount})=>{
    const{addToCart}=useContext(CartContext)
    const{stock}=product

    const[quantity,setQuantity]=useState(1)

    const onAdd=()=>{
        if(quantity<stock){
            setQuantity(quantity+1)
        } 
    }

    const onDiscount=()=>{
        setQuantity(quantity-1)
    }

    product.quantitySelected=quantity

    return(
        <div  className="divItemCount">
            <div>
                <button onClick={onDiscount} disabled={quantity===1}>-</button>
                <span>{quantity}</span>
                <button onClick={onAdd}>+</button>
            </div>
            <span>Stock: {stock}</span>
            <button onClick={()=>{addToCart(product);hiddenItemCount()}} className='btnGlobal'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount