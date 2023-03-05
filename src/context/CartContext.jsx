import { useState, createContext } from "react"




export const cartContext = createContext ();
const  CartContextProvider = ({children}) => {
    const [ cart, setCart ] = useState([]);

    const addItem = (item, quantity) => {
      if(isInCart(item.id)) {
        let pos = cart.findIndex(x => x.id === item.id);
        cart[pos].quantity += quantity;
        setCart(cart);
      } else {
        setCart([...cart, {...item, quantity: quantity}])
      };
    
    };

      const removeItem = (id) => {
        const products = cart.filter(x => x.id !== id);
        setCart(products);
      };

      const clear = () => {
        setCart([]);
      };

      const isInCart = (id) => {
        return cart.some(x => x.id === id)
      }; 
       
      const cartTotal =() => {
        return  cart.reduce((total, item) =>
        total + item.quantity, 0); 

      }

      const sumaTotal = () => {
        return cart.reduce((total, item) =>
        total + item.quantity * item.price, 0);
      }



      
  return (
    <cartContext.Provider value={{ cart, addItem, clear, removeItem,cartTotal, sumaTotal }}>
        {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider;