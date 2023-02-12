import Item from "../Item/Item";


const ItemList = ({items}) => {
  return (
    <div className="row mx-auto text-center" >
       <h4>Nuestros productos</h4>
         { 
             items.map((item) => (
                 <div className="col my-3" key={item.id} to={`/item/${item .id}`} >
                   <Item item={item} />
                 </div>
            ))
         }
   </div>
  );
};

export default ItemList;



