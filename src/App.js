import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Cart from './pages/Cart'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartProvider from './context/CartContext';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productos/:category' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<Detail/>}/>
          <Route path='/carrito' element={<Cart/>}/>
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/> 
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
