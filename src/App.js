import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import 'boxicons';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Bienvenidos a MangaShonnen' />} />
          <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
          <Route path='/item/:productId' element={ <ItemDetailContainer /> } />
        </Routes>

      </BrowserRouter>
  
    
  );
}

export default App;
