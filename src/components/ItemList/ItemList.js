import Item from "../Item/Item"
import getProductsAsincrono from "../../services/products.services"
import { useState } from "react"

const ItemList=()=>{
    const[products,setProducts]=useState([])
    getProductsAsincrono()
    .then((res)=>{
        setProducts(res)
    })

    console.log('products',products)
    return(
        <Item products={products}/>
    )
}

export default ItemList