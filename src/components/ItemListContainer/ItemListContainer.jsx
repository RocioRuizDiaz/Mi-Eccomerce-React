import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import {getFirestore, getDocs, collection, query, where, QuerySnapshot} from "firebase/firestore"


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
   
 /* const getProducts = () => {
    const db = getFirestore ();
    const querySnapshot = collection(db, "items");
    
      if (category){
        const newConfiguration = query(
          querySnapshot, 
          where('categoryId', '==', category)
          );
          getDocs(newConfiguration)
           .then((response) => {
             const data = response.docs.map((doc)=>{
              return {id: doc.id, ...doc.data()};
          });
          setLoading(false);
          setProducts(data);  
      })
        .catch(error => console.log(error));   

      } else{
        getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((doc)=>{
            return {id: doc.id, ...doc.data()};
          });
           setLoading(false);
          setProducts(data);  
      })
        .catch(error => console.log(error));           
      }
  };*/
  
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = id ? query (itemsCollection, where("category", "==", id)) : itemsCollection;
      getDocs(q).then((snapShot) => {
                setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
                setLoading(false);
    })
  }, [id]);

  return (
    <div>
     
      {loading ? 
        <Loading /> 
        :<ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;





