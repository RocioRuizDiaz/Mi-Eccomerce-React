import Image from "../Image";
import Description from "../Description";
import ItemCount from "../ItemConunt/ItemCount";
import ButtonDetalles from "../ButtonDetalles";
import SimulationFetch from "../../Product/SimulationFetch";
import Productos from "../../Product/Productos";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



const ItemDetail = () => {
    const [datos, setDatos] =useState([]);
    const {idItem} =useParams();

    useEffect(() => {
        SimulationFetch(Productos.filter(flt => flt.id === idItem), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])

  return (
    <div className="detailItem">
        {
            datos.map(item => (
                <>
                <div className="containerLeft">
                    <Image
                    imagen={item.imgProduct.firtsImg}
                    />
                </div>

                   <div className="containerRigth">
                        <Description
                             title= {item.title}
                             parrafo= {item.description}
                             cantidad = {item.stock}
                             precio={item.price}
                        />     
                     
                      <div className="button">
                          <ItemCount
                            cant={5}
                         />
                    
                    <ButtonDetalles
                        txt="Agregar al carrito"
                     />   
                </div>
             </div>
             </>
            ))
        }

    </div>
  )
}

export default ItemDetail;


         









