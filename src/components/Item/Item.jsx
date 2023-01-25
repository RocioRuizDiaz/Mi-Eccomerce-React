import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars, faCartPlus, faStarHalfAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import "./Item.css";
import { Link } from "react-router-dom";

function Item({ prod }) {
 
  const {name, category, price, img,  id} = prod;

  return (
    <div>
    <div className="productos" >
      <img className="product__image" src={img} alt="image" />
      <div className="product__contaier">
      
      
      
        <button type="button" className="w-2/4  py-2 agregar-carrito">
         Agregar al carrito <FontAwesomeIcon  icon= {faCartPlus}></FontAwesomeIcon> 
        </button>
        <Link to={`/item/${id}`}>
        <button type="button" className="w-2/4 py-2">
           Ver detalles <FontAwesomeIcon icon={faBinoculars}></FontAwesomeIcon> 
        </button>
        </Link>
      </div>
      <div className="produc-info p-3">
          <span className="product-type">{category}</span>
          <p className='d-block text-dark text-decoration-none py-2 font-medium product-name'>{name}</p>
          <span className="product-price">${price}</span>
      </div>
    </div>
    </div>
  );
}

export default Item;