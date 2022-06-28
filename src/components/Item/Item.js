import './Item.scss'
const Item=({products})=>{

    return(
        <div>
            {products.map(({id,title,pictureUrl})=>{
                return(
                    <div key={id} className="productItem">
                        <h3>{title}</h3>
                        <img src={`./${pictureUrl}`} alt='foto'/>
                    </div>
                )
            })}
        </div>
       
    )
}

export default Item