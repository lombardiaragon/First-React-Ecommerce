import { Button } from "@mui/material"
import {useContext,useState} from 'react';
import { CartContext } from '../../context/CartContext';
import './ItemCount.scss'


const ItemCount=({product})=>{
    const{cartListItems,setCartListItems}=useContext(CartContext)
    const{stock}=product

    const[quantity,setQuantity]=useState(1)
    
    const addToCart=(itemToCart)=>{
        // console.log('item con quantity',itemToCart)
        let isInCart=cartListItems.some((cartItem)=>cartItem.id===itemToCart.id)
        if(!isInCart){
            setCartListItems([...cartListItems,itemToCart])
        }
    }

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
                <Button onClick={onDiscount} disabled={quantity===1}>-</Button>
                <span>{quantity}</span>
                <Button onClick={onAdd}>+</Button>
            </div>
            <span>Stock: {stock}</span>
            <Button onClick={()=>addToCart(product)}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount