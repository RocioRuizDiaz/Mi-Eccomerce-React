import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import 'boxicons';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import Cart from "./pages/Cart/Cart";
import Agradecimiento from "./components/Agradecimiento";
import Checkout from "./components/Checkout";




function App() {
  return (
      <BrowserRouter>
       <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={ <ItemListContainer /> } />
          <Route path="/item/:id" element={ <ItemDetailContainer /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/checkout" element={ <Checkout /> } />
          <Route path="/Agradecimiento/:id" element={<Agradecimiento />} />;
        </Routes>
        </CartContextProvider>
      </BrowserRouter>
      
    
  );
}

export default App;
