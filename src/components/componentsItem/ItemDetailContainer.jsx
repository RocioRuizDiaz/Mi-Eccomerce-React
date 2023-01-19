import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react";
import { getProductById } from "../Product/Productos";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
  
    const { productId } = useParams()
  
  
    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])
  
  
  
    if (loading) {
      return <div className="block">Cargando...</div>
    }
  
  
  
    return (
      <ItemDetail product={product}/>
    )
  }
  
  export default ItemDetailContainer;
  