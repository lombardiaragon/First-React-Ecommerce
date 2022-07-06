import { createContext, useState } from "react"

const CartContext=createContext()

const CartProvider=({children})=>{
    const[cartListItems, setCartListItems]=useState([])

    const quitFromCart=(item)=>{
        setCartListItems(cartListItems.filter((el)=>el.id !== item.id))
    }
    const addToCart=(itemToCart)=>{
        let isInCart=cartListItems.some((cartItem)=>cartItem.id===itemToCart.id)
        if(!isInCart){
            setCartListItems([...cartListItems,itemToCart])
        }
    }

    let mapPrices=cartListItems.map(item=>item.price*item.quantitySelected)
    let totalAcc=mapPrices.reduce((acc,prices)=>acc+prices,0)

    const data={
        cartListItems,
        setCartListItems,
        addToCart,
        quitFromCart,
        totalAcc     
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
export {CartContext}