import { useEffect, useState } from "react";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { collection, getDocs, query, where,getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  const { dataBase, setDataBase } = useContext(cartContext);
  const db = getFirestore();
  const [filteredItems, setFilteredItems] = useState([]);

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
    const q = query(itemsCollection, where("categoryId", "==", categoryId));
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
      getItems()
        .then((resolveDB) => {
          setItems(resolveDB);
          setLoading(false);
        })
        .catch((rejectDB) => {
          alert(rejectDB);
        });
    } else {
      getItemsByCategory(categoryId)
        .then((resolveDB) => {
          setFilteredItems(resolveDB);
          setLoading(false);
        })
        .catch((rejectDB) => {
          alert(rejectDB);
        });
    }
  }, [categoryId]);

  useEffect(() => {
    if (categoryId) {
      getItemsByCategory(categoryId)
        .then((resolveDB) => {
          setFilteredItems(resolveDB);
          setLoading(false);
        })
        .catch((rejectDB) => {
          alert(rejectDB);
        });
    } else {
      setFilteredItems(items);
    }
  }, [items, categoryId]);

  const handleFilterItems = (categoryId) => {
    if (categoryId) {
      const filteredItems = items.filter((item) => item.categoryId === categoryId);
      setFilteredItems(filteredItems);
    } else {
      setFilteredItems(items);
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <ItemList items={filteredItems} handleFilterItems={handleFilterItems} />
      )}
    </div>
  );
};

export default ItemListContainer;


































































