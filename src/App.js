import NavBar from "./components/NavBar/NavBar";
import ContainerCardItem from "./components/componentsItem/ContainerCardItem";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from "./components/componentsItem/ItemDetail/ItemDetail";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={ <ContainerCardItem greeting='Bienvenidos'/>  } />
      <Route path='/item/:idItem' element={ < ItemDetail/>  } />
      <Route path='/category/:idCategori' element={ <ContainerCardItem /> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
