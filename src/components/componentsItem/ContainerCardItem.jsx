import { getProducts,getProductsByCategory, getProductsById } from "../Product/Productos";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";



const ContainerCardItem = () => {
    const [ products, setProducts] = useState( []);
    let {idCategory} = useParams();

    useEffect((products) => {
      const asyncFunction = idCategory ? getProductsByCategory : getProducts
      
      asyncFunction(idCategory)
      .then(products => {
        setProducts(products)
      })
      .catch(error => {
        console.log(error)
      })
      
    }, [idCategory])

  return (      
    <>
    {products.map((product) => {
      <CardItem
        key={product.id}
        imagen={product.imgProduct.firtsImg}
        title={product.title}
        cantidad={product.stock}
        precio={product.price}
      />;
    })}
  </>
       
  )
}

export default ContainerCardItem;