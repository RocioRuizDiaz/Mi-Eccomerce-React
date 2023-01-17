import ItemCount from "../../components/Item/ItemConunt/ItemCount";
import Product from "../../components/Product/Product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SimulationFetch from "../../components/Product/SimulationFetch";
import CardItem from "../../components/CardItem/CardItem";
import ItemDetail from '../../pages/ItemDetail/ItemDetail';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    let {idCategory} = useParams()

    useEffect(() => {
        if(idCategory === undefined) {
            SimulationFetch(Product, 3000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        } else {
            SimulationFetch(Product.filter(filter => filter.type === idCategory), 3000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
         }
        }, [idCategory])

        return (
            <div className="ItemListContainer">
                {
                    datos.map(product => (
                        <cardItem
                          key={product.id}
                          id={product.id}
                          imagen={product.imageProduct.firtsImg}
                          tittle={product.title}
                          cantidad={product.stock}
                          precio={product.price}
                        />
                    ))
                }
            </div>
          )
    }



  
  
  


export default ItemListContainer
