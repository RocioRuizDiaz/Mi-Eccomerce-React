import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartTotal } = useContext(cartContext);

  return (
    
      <Link to={"/cart"}type="button" className="btn body position-relative" title="Ir al carrito">
        <img className="mr-4" src="https://i.ibb.co/JcPsZKQ/cart.png" alt="logo" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link> 
    
  );
};

export default CartWidget;