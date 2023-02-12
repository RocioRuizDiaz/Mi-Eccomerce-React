import React,{ useContext }from "react";
import ItemCount from "../ItemConunt/ItemCount";
import { cartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(cartContext );
  
  const onAdd = (quantity ) => {
    addItem(product, quantity);
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
            <img alt={product.title} src={`/images/${product .imageId}`} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <p className="card-text">{product.categoryId}</p>
              <p className="card-text">Stock disponible: {product.stock} unidad/es</p>
              <p className="card-text">Descripcion {product.description}</p> 
              <ItemCount stock={product.stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default ItemDetail;


         









