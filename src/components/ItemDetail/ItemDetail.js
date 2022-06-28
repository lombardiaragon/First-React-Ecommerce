import './ItemDetail.scss'
const ItemDetail=({product})=>{
    const{title,price,pictureUrl}=product
    return(
        <div className="divItemDetail">
            <div className='divItemDetail__image'>
                <img src={`/${pictureUrl}`} alt='foto'/>
            </div>
            <div className='divItemDetail__info'>
                <h3>{title}</h3>
                <span>${price}</span>
            </div>

        </div>
    )
}

export default ItemDetail