import Image from "./Image";
import "../../Styles/CardItem.css";
import Description from "./Description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";
import { Link } from "react-router-dom";



const CardItem = (props) => {
  return (
    <div className="cardItem">
    <Image
     imagen ={props.imagen} alt="imagen" 
    />
  <Description 
      title={props.titlle}
      cantidad={props.stock}
      precio={props.price}
    />
    <div>
      <Link to={`/item${props.id}`}>
      <ButtonDetalles 
          txt="Ver detalles" 
       />
      </Link>
      <ButtonAddCart />
    </div>
</div>

  )
}

export default CardItem;






