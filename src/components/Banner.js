import '../scss/index.scss'
import ShopInfo from './ShopInfo'
const Banner=()=>{
    return(
        <>
        <div className="divBanner">
            <img src='/tienda1.jpg' alt='banner tienda' className="divBanner__img"/>
        </div>
        
        <ShopInfo/>
        </>
    )
}

export default Banner