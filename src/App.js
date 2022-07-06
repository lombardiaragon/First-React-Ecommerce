import './scss/index.scss'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Cart from './pages/Cart'
import ItemListContainer from './components/ItemListContainer';
import CartProvider from './context/CartContext';
import MainContainerLayout from './Layout/MainContainer.layout';
import HeaderLayout from './Layout/Header.layout';
import MainContentLayout from './Layout/MainContent.layout';
import FooterLayout from './Layout/Footer.layout';
import SearcherProvider from './context/SearcherContext';



function App() {

  return (
    <SearcherProvider>
    <CartProvider>
      <MainContainerLayout>
        <BrowserRouter>
          <HeaderLayout>
            <NavBar/>
          </HeaderLayout>
          <MainContentLayout>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/productos/:category' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<Detail/>}/>
              <Route path='/carrito' element={<Cart/>}/>
              <Route path='/contacto' element={<Contact/>}/>
              <Route path='*' element={<NotFound/>}/> 
            </Routes>
          </MainContentLayout>
          <FooterLayout/>
        </BrowserRouter>
      </MainContainerLayout>
    </CartProvider>
    </SearcherProvider>
  )
}

export default App;
