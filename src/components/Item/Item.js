import './Item.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item=({product})=>{
    const{title,price,id,pictureUrl}=product

    return(
            <div key={id} className='productItem'>
                <Link to={`/item/${id}`}><img src={`/${pictureUrl}`} alt='foto' className='productItem__img'/></Link>
                <h3>{title}</h3>
                <span>${price}</span>
                <ItemCount stock={6} initial={1} product={product}/>
            </div>          
    )
}

export default Item