import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { getFirestore,collection, getDocs, query, where} from "firebase/firestore"


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  let { categoryId } = useParams();
  
  const db = getFirestore();
  
  async function getItems() {
    const itemsCollection = collection(db, "items");
    const snapshot = await getDocs(itemsCollection);
    const ItemsDB = snapshot.docs.map((doc) => {
      let Items = doc.data();
      Items.id = doc.id;
      return Items;
    });
    return ItemsDB;
  }
  async function getItemsByCategory(categoryId) {
    const itemsCollection = collection(db, "items");
    const q = query(itemsCollection.where("categoryId", "==", categoryId));
    const querySnapshot = await getDocs(q);
    const ItemsDB = querySnapshot.docs.map((doc) => {
      let Items = doc.data();
      Items.id = doc.id;
      return Items;
    });
    return ItemsDB;
  }

  useEffect(() => {
    if (!categoryId) {
      // Si no hay un categoryId, se obtienen todos los items
      getItems()
        .then((resolveDB) => {
          setItems(resolveDB);
          setLoading(false);
        })
        .catch((rejectDB) => {
          alert(rejectDB);
        })
    } else {
      // Si hay un categoryId, se obtienen los items correspondientes a esa categoría
      getItemsByCategory(categoryId)
        .then((resolveDB) => {
          setItems(resolveDB);
          setLoading(false);
        })
        .catch((rejectDB) => {
          alert(rejectDB);
        })
    }
  }, [categoryId])
  

  return (
    <div>
     
      {loading ? 
        <Loading /> 
        :<ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;





