import '../scss/index.scss'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ShopInfo=()=>{
    return(
        <div className='divShopInfo'>
            <ul className='divShopInfo__list'>
                <li><MyLocationIcon/><span>Nuestra Tienda</span></li>
                <li><PaymentIcon/><span>Todas las tarjetas</span></li>
                <li><LocalShippingIcon/><span>Envío gratis</span></li>
                <li><AddShoppingCartIcon/><span>Descuentos Exclusivos</span></li>
            </ul>
        </div>
    )
}

export default ShopInfo