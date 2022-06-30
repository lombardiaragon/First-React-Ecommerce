import ItemDetail from "./ItemDetail"
import { useEffect,useState } from "react"
import { getProduct } from "../services/products.services"
import { useParams } from 'react-router-dom'
import '../scss/index.scss'


const ItemDetailContainer=()=>{
    const{id}=useParams()
    // console.log('useParams',useParams())
    const[product,setProduct]=useState({})
    
    useEffect( ()=>{
        
        getProduct(id)
        .then( (prod) => {
            // console.log("Respuesta getProduct: ", prod)
            setProduct(prod)
        })
     },[id])
    
    return(
        <div className='divItemDetailContainer'>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer