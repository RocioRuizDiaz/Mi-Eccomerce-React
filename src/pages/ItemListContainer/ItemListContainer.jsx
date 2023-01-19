import { Link } from "react-router-dom";

    function ItemListContainer( props) {
        
        return (
            <ul>
                <li>
                    <Link to="/Category/Mangas">
                        {props.itemUno}

                    </Link>
                </li>
                <li>
                    <Link to="Category/Preventas">
                        {props.itemDos}
                    </Link>
                </li>
                <li>
                    <Link to="Category/Comics">
                        {props.itemTres}
                    </Link>

                </li>
            </ul>
        );

    }



  
  
  


export default ItemListContainer;
