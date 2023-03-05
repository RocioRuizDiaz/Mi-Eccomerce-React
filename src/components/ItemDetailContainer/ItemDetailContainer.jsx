import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  
  const db= getFirestore();
  const querySnapshot = doc(db, "items", id);
  
  useEffect (() => {
  getDoc(querySnapshot).then((querySnapshot) => {
    if (querySnapshot.exists()){
      setProduct({id: querySnapshot.id, ...querySnapshot.data()});
      setLoading(false);
    }else {
     console.log("error");
    }
   })
   
  }, [])

    return (
      
        <div className="container">
          {loading ? <Loading /> :<ItemDetail product={product} />}
          
        
        </div>
      
      
      
  )


}

export default ItemDetailContainer;