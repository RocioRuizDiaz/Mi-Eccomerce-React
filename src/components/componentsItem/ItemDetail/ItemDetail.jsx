import Image from "../Image";
import Description from "../Description";
import ItemCount from "../ItemConunt/ItemCount";
import ButtonDetalles from "../ButtonDetalles";
import { getProductsById } from "../../Product/Productos";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function ItemDetail({product}) {

const { name, category, price, full, description, stock } = product;


  return (
    <div className="detailItem">
      <ItemDetail product={product} />
      {product.map(items => (
        <>
          <div className="containerLeft">
            <Image
              imagen={items.imgProduct.firtsImg} />
          </div>

          <div className="containerRigth">
            <Description
              title={items.title}
              parrafo={items.description}
              cantidad={items.stock}
              precio={items.price} />

            <div className="button">
              <ItemCount
                cant={5} />

              <ButtonDetalles
                txt="Agregar al carrito" />
            </div>
          </div>
        </>
      ))}

    </div>
  );
}

export default ItemDetail;


         









