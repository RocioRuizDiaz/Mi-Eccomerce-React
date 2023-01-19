import './navbar.css';
import CartWidget from '../CartWidget';
import { Link } from "react-router-dom";



function NavBar( props) {
  return (
    <div>
      <nav className='containerItemList'>
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
      </nav>
      <div className='carrito'>
        <CartWidget />
      </div>
    </div>
  );

}

export default NavBar;




















