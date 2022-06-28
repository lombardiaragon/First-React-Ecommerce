import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

const ItemListContainer=({greeting})=>{

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock={6} initial={1}/>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer