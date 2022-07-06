import Item from "./Item"
import '../scss/index.scss'

const ItemList=({products})=>{

    return(
        <div className="divItemList">
            { products.map((product)=> {
               return(
                <Item key={product.id} product={product}/>
               )
             })
            }
        </div>
    )
}

export default ItemList