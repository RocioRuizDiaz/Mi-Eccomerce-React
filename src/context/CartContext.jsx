import { useState, createContext } from "react"




export const cartContext = createContext ();
const  CartContextProvider = ({children}) => {
    const [ cart, setCart ] = useState([]);

    const addItem = (item, quantity) => {
      if(isInCart(item.id)) {
        let pos = cart.findIndex(x => x.id === item.id);
        cart[pos].quantity += quantity;
        setCart([...cart, {...item, quantity: quantity}]);
      } else {
        setCart([...cart, {...item, quantity: quantity}])
      };
    
    };

      const removeItem = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
      };

      const isInCart = (id) => {
        return cart.some((item) => item.id === id)
      }; 

      const clear = () => {
        setCart([]);
      }
       
      const cartTotal =() => {
        return  cart.reduce((acc, curr) => acc + curr.quantity, 0); 

      }

      const sumaTotal = () => {
        return cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
      }
  return (
    <cartContext.Provider value={{ cart, addItem, clear, removeItem,cartTotal, sumaTotal }}>
        {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider;