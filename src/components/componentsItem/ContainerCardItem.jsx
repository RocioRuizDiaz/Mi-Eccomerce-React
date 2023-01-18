//import CardItem from "./CardItem";
import SimulationFetch from "../Product/SimulationFetch";
import Productos from "../Product/Productos";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";



const ContainerCardItem = () => {
    const [ datos, setDatos ] = useState( []);
    let {idCategory} = useParams();

    useEffect(() => {
      if(idCategory === undefined){
        SimulationFetch(Productos, 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
      }else {
        SimulationFetch(Productos.filter(filter => filter.type === idCategory ), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
      }
      
    }, [idCategory])


  return (
    <div>
        { 
          datos.map(product => (
            <CardItem 
              key={product.id}
              imagen={product.imgProduct.firtsImg}
              title={product.title}
              cantidad={product.stock}
              precio={product.price}
            />
          ))
 
        }
         
    </div>
  )
}

export default ContainerCardItem;