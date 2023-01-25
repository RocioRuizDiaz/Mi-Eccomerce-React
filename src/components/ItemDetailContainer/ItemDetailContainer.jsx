import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { getProductById } from "../../Data";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState()

  const { productId } = useParams()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProductById(productId).then(response => {
        setProduct(response)
    }).finally(() => {
        setLoading(false)
    })
  }, [productId])
  

  if (loading) {
    return <div className="block rounded bg-green-500 text-center ">
        Cargando
    </div>
  }
    return (
      <ItemDetail 
    product={product} />
  )


}

export default ItemDetailContainer;