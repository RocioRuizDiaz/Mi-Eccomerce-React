import ItemCount from "../../ItemConunt/ItemCount";

export const ItemListContainer = ({greeting}) => {
    return (
       <div>
        {greeting}
        <ItemCount />
       </div>
    
    );
};
export default ItemListContainer;