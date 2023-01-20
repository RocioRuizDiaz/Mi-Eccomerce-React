import './navbar.css';
/*import CartWidget from '../CartWidget';
import { Link } from "react-router-dom";*/
import logo from '../Img/Logo.jpg';


function NavBar( props) {
  return (
    <header>
     <a href='#'>
        <div className='logo'>
            <img src={logo} alt='logo' width={100} />
        </div>
     </a>
     <ul>
        <li> 
            <a href='#'> INICIO </a>
        </li>
        <li> 
            <a href='#'>MANGAS</a>
        </li>
     </ul>
        <div className='cart'>
            <box-icon name='cart'></box-icon>
            <span>0</span>
        </div>
    </header>
   /* <div>
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
    </div>*/
  );

}

export default NavBar;




















