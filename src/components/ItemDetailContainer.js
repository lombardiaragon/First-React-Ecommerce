import ItemDetail from "./ItemDetail"
import { useEffect,useState } from "react"
import { getProduct } from "../services/products.services"
import { useParams } from 'react-router-dom'
import '../scss/index.scss'


const ItemDetailContainer=()=>{
    const{id}=useParams()
 
    const[product,setProduct]=useState({})
  
    useEffect( ()=>{
        getProduct(id)
        .then( (prod) => {
            if(prod!=='error!'){
                setProduct(prod)
            }
        })
     },[id])


    return(
        <div className='divItemDetailContainer'>
            {Object.keys(product).length===0 ?
             <h1>NO EXISTE EL PRODUCTO</h1>
             :
             <ItemDetail product={product}/>
               
            }
        </div>
    )
}

export default ItemDetailContainer