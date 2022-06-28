import productsMock from '../utils/productsMock'

const getProductsAsincrono=()=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{resolve(productsMock)},1000) 
    })
}

export default getProductsAsincrono