import './ItemDetailContainer.scss'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect,useState } from "react"
import getProductsAsincrono from "../../services/products.services"

const ItemDetailContainer=()=>{
    const[product,setProduct]=useState({})
    useEffect(()=>{
        getProductsAsincrono()
        .then((res)=>{
        setProduct(res.find((el)=>el.id===1))})
    },[])
    
    return(
        <div className='divItemDetailContainer'>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer