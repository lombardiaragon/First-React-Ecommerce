import { createContext, useState } from "react";

const SearcherContext=createContext()

const SearcherProvider=({children})=>{
    const[searchProduct,setSearchProduct]=useState('')

    const data={
        searchProduct,
        setSearchProduct
    }

    return(
        <SearcherContext.Provider value={data}>
            {children}
        </SearcherContext.Provider>

    )
}

export default SearcherProvider
export {SearcherContext}