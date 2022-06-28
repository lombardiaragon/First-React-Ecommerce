import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"
import { useEffect,useState } from 'react'
import getProducts from '../../services/products.services'
import { useParams } from 'react-router-dom'


const ItemListContainer=()=>{
    const[products,setProducts]=useState([])
    const{category}=useParams()
    console.log(useParams())
    
    useEffect(()=>{
        getProducts()
        .then((res)=>{
        category? (setProducts(res.filter((el)=>el.category===category))) : setProducts(res)
    })
    },[category])

    console.log('productos filtrados',products)
    return(
        <div className="divItemListContainer">   
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer