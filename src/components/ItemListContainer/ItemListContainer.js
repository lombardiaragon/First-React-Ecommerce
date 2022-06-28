import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"
import getProductsAsincrono from '../../services/products.services'
import { useEffect,useState } from 'react'


const ItemListContainer=({greeting})=>{
    const[products,setProducts]=useState([])
    
    useEffect(()=>{
        getProductsAsincrono()
        .then((res)=>{
        setProducts(res)})
    },[])
    
    return(
        <div className="divItemListContainer">   
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer