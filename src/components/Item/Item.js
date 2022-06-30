// import './Item.scss'
// import '../../App.scss'
import '../../scss/index.scss'
import { Link } from 'react-router-dom'

const Item=({product})=>{
    const{title,price,id,pictureUrl}=product

    return(
            <Link to={`/item/${id}`} className='linkDecoration'>
            <div key={id} className='productItem'>
                <div className='productItem__containerImg'>
                    <img src={`/${pictureUrl}`} alt='foto'/>
                </div>
                <div className='productItem__info'>
                    <h3>{title}</h3>
                    <span>${price}</span>
                </div>
            </div>        
            </Link>  
    )
}

export default Item