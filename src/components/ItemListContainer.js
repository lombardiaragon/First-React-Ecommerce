import ItemList from "./ItemList"
import { useEffect,useState } from 'react'
import getProducts from '../services/products.services'
import { useParams } from 'react-router-dom'
import '../scss/index.scss'


const ItemListContainer=()=>{
    const[products,setProducts]=useState([])
    const{category}=useParams()
    
    useEffect(()=>{
        getProducts()
        .then((res)=>{
        category? (setProducts(res.filter((el)=>el.category===category))) : setProducts(res)
    })
    },[category])

    // console.log('productos filtrados',products)
    return(
        <div className="divItemListContainer">   
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer