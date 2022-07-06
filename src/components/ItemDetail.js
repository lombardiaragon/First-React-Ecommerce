import { Link } from 'react-router-dom'
import { useState } from 'react'
import ItemCount from './ItemCount'
import '../scss/index.scss'


const ItemDetail=({product})=>{
    const{title,price,pictureUrl}=product
    const[showItemCount,setShowItemCount]=useState(true)

    const hiddenItemCount=()=>{
        setShowItemCount(!showItemCount)
    }


    return(
        <div className="divItemDetail">
            <div className='divItemDetail__image'>
                <img src={`/${pictureUrl}`} alt='foto'/>
            </div>
            <div className='divItemDetail__info'>
                <div className='divTitlePrice'>
                    <h3 className='titleItemDetail'>{title}</h3>
                    <span className='priceItemDetail'>${price}</span>
                    <p className='numberQuotes'>6 cuotas sin interés: ${price/6}</p>
                </div>
                <form className='formSizes'>
                    <label>Talle</label>
                    <select className='selectSizes' name="sizes">
                        <option value="small">S</option>
                        <option value="medium">M</option>
                        <option value="large">L</option>
                        <option value="extralarge">XL</option>
                    </select>
                </form>
                <form className='formColors'>
                    <label>Color</label>
                    <select className='selectColors' name="colors">
                        <option value="azul">Azul</option>
                        <option value="blanco">Blanco</option>
                        <option value="negro">Negro</option>
                    </select>
                </form>
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