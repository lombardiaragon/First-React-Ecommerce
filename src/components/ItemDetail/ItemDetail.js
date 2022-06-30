import { Link } from 'react-router-dom'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
// import './ItemDetail.scss'
// import '../../App.scss'
import '../../scss/index.scss'


const ItemDetail=({product})=>{
    const{title,price,pictureUrl}=product
    const[showItemCount,setShowItemCount]=useState(true)

    const hiddenItemCount=()=>{
        setShowItemCount(!showItemCount)
        console.log('hidden',showItemCount)
    }


    return(
        <div className="divItemDetail">
            <div className='divItemDetail__image'>
                <img src={`/${pictureUrl}`} alt='foto'/>
            </div>
            <div className='divItemDetail__info'>
                <h3>{title}</h3>
                <span>${price}</span>
                {showItemCount ?
                <ItemCount product={product} hiddenItemCount={hiddenItemCount} />
                :
                <Link to={'/carrito'}><button className='btnGlobal'>IR AL CARRITO</button></Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail