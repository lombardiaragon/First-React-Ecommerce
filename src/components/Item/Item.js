import './Item.scss'
import ItemCount from '../ItemCount/ItemCount'

const Item=({product})=>{
    const{title,price,id,pictureUrl}=product

    return(
            <div key={id} className='productItem'>
                <img src={`./${pictureUrl}`} alt='foto' className='productItem__img'/>
                <h3>{title}</h3>
                <span>${price}</span>
                <ItemCount stock={6} initial={1}/>
            </div>          
    )
}

export default Item