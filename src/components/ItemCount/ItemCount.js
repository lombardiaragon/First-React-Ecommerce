import { Button } from "@mui/material"
import { useState } from "react"

const ItemCount=({stock,initial})=>{
    const[count,setCount]=useState(initial)
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
            <Button>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount