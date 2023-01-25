import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars, faCartPlus  } from "@fortawesome/free-solid-svg-icons";
import "./Item.css";


function Item({ prod }) {
 
  const { id, img, name, category, price,  } = prod;

  return (
    
    <div className="productos" >
      <img className="image" src={img} alt="image" />
      <div className="contaier">
         <h2 className="title" >{name}</h2>
         <p className="price">${price}</p>
         <p className="type">{category}</p>
        <button type="button" >
         Agregar al carrito <FontAwesomeIcon  icon= {faCartPlus}></FontAwesomeIcon> 
        </button>
        <Link to={`/item/${id}`}>
        <button type="button">
           Ver detalles <FontAwesomeIcon icon={faBinoculars}></FontAwesomeIcon> 
        </button>
        </Link>
      </div>
    </div>
    
  );
}

export default Item;