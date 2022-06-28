import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  const greeting='BIENVENIDOS'
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
    </div>
  )
}

export default App;
