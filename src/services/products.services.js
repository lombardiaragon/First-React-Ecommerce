import { collection,getDocs,getDoc,doc } from "firebase/firestore";
import db from '../utils/firebaseConfig'

const getProducts = async() =>{
    const itemsCollection=collection(db, "productos")
    const productsSnapshot = await getDocs(itemsCollection);
    
    const productList = productsSnapshot.docs.map((doc) => {
        let product = doc.data()
        product.id = doc.id
        return product
    })
        
    return productList
}

const error='error!'
const getProduct=async(id)=>{
    const docRef= doc(db,'productos',id)
    const docSnapshot=await getDoc(docRef)
    if(docSnapshot.data()){
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
    }
    else {
        return error
    }
}



export default getProducts
export {getProduct}