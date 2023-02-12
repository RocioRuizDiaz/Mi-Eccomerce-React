import { Link } from "react-router-dom";

const Item = ({ item  }) => {
 
  return (
     <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
       <img className="image" alt={item .title} src={`/images/${item .imageId}`} width={220} height={235.33}/>
       <h3 className="card-text">{item .title}</h3>

         </Link>
  
  
    
  );
}

export default Item;