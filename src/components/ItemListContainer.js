import ItemList from "./ItemList"
import { useEffect,useState } from 'react'
import getProducts from '../services/products.services'
import { useParams } from 'react-router-dom'
import '../scss/index.scss'
import { SearcherContext } from "../context/SearcherContext"
import { useContext } from "react"


const ItemListContainer=()=>{
    const{searchProduct}=useContext(SearcherContext)
     const[products,setProducts]=useState([])
     const{category}=useParams()
    
     useEffect(()=>{
         getProducts()
         .then((res)=>{
         category? (setProducts(res.filter((el)=>el.category===category))) : setProducts(res)
     })
     },[category])

     let filterSearcher=products.filter(el=>el.category.includes(searchProduct) ||  el.description.includes(searchProduct))

    return(

        <div className="divItemListContainer">
            {searchProduct? 
            <ItemList products={filterSearcher}/>
            :
            <ItemList products={products}/>
            }   
        </div>
    )
}

export default ItemListContainer