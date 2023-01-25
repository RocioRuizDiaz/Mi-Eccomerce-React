import "./ItemDetail.css"
//import { Link } from "react-router-dom";
import ItemCount from "../ItemConunt/ItemCount";



function ItemDetail({product}) {


  return (
    <div className="product__seccion">
        <img src={product.deta} alt={product.name}/>
        <div className="contenedor">
        <h2 className="title">{product.name}</h2>
        <h3 className="price">${product.price}</h3>
        <p className="type">{product.category}</p> 
         <h3>{product.description}</h3>
         
         <ItemCount  stock={product.stock} />
       
        </div>
      
       </div>
  );
}

export default ItemDetail;


         









