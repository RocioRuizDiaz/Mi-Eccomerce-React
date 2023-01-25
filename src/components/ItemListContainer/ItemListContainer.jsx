//import "./ItemListContainer.css";
import {  getProducts, getProductsByCategory} from "../../Data"
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
  const[products, setProducts] = useState([]);

  const {categoryId} =useParams();  
   //const getProducts = fetch('https://fakestoreapi.com/products');

   useEffect(() =>{
    /*getProducts*/
    const asynFunction = categoryId ? getProductsByCategory: getProducts
    
    asynFunction(categoryId)
    .then((products) =>{
      setProducts(products);
    })
    /*.then((response) => {
      console.log(response)
      setProducts(response)
    })*/
    .catch((error) => console.log(error))
   }, [categoryId])

  return (
    <div>
      <h3>{greeting}</h3>
      <ItemList productos={products} />
    </div>
  );
};

export default ItemListContainer;





