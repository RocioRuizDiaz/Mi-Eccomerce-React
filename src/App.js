import ListContainer from "./components/ItemListContainer/ListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import 'boxicons';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ListContainer greeting='Bienvenidos a MangaShonnen' />} />
          <Route path="/category/:categoryId" element={ <ListContainer /> } />
          <Route path='/item/:productId' element={ <ItemDetailContainer /> } />
        </Routes>

      </BrowserRouter>
  
    
  );
}

export default App;
