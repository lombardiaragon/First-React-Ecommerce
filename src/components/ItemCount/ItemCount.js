import { Button } from "@mui/material"
import { useState } from "react"
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';


const ItemCount=({stock,initial,product})=>{
    const[count,setCount]=useState(initial)
    const{addToCart}=useContext(CartContext)

    const onAdd=()=>{
        if(count<stock){
            setCount(count+1)
        } 
    }

    const onDiscount=()=>{
        setCount(count-1)
    }

    return(
        <div>
            <div>
                <Button onClick={onDiscount} disabled={count===0}>-</Button>
                <span>{count}</span>
                <Button onClick={onAdd}>+</Button>
            </div>
            <Button onClick={()=>addToCart(product)}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount