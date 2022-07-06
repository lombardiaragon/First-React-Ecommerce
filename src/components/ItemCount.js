import {useContext,useState} from 'react';
import {CartContext} from '../context/CartContext'
import '../scss/index.scss'

const ItemCount=({product,hiddenItemCount})=>{
    const{addToCart}=useContext(CartContext)
    const{stock}=product

     const[quantity,setQuantity]=useState(1)

     const onAdd=()=>{
         if(quantity<stock){
             setQuantity(quantity+1)
         } 
     }

     const onDisccount=()=>{
         setQuantity(quantity-1)
     }

    product.quantitySelected=quantity

    return(
        <div  className="divItemCount">
            <div className='divItemCount_counter'>
                <button onClick={onDisccount} disabled={quantity===1} className='btnCounter'>-</button>
                <span>{quantity}</span>
                <button onClick={onAdd}  className='btnCounter'>+</button>
            </div>
            <span>Stock: {stock}</span>
            <button onClick={()=>{addToCart(product);hiddenItemCount()}} className='btnGlobal'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount