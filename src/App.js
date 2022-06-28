import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const greeting='BIENVENIDOS'
  return (
    <div>
      <NavBar/>
      <ItemDetailContainer/> 
      <ItemListContainer greeting={greeting}/>
    </div>
  )
}

export default App;
