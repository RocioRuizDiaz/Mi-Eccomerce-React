import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Product from './components/Product/Product';
import ItemCount from './components/Item/ItemConunt/ItemCount';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <ItemCount/>
        <Routes>
          <Route path='*' element={<div>Error</div>} />
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="detail" element={<ItemDetail />}  />
        </Routes>
    </BrowserRouter>
   
  );
};

export default App;
