import './navbar.css';
import ButtonAddCart from '../Button/ButtonAddCart';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
        <nav className="">
             <ul>
                <li> 
                    <Link to='/'>PRODUCTOS</Link >
                </li>
                <li> 
                    <Link to='/category/manga'>MANGAS</Link >
                </li>
                <li> 
                    <Link to='/category/comics'>COMICS</Link >
                </li>

                <div className='carrito'>
                <ButtonAddCart />
                </div>
            
                
             </ul>
                
             </nav> 

                
    </header>

  );

}

export default NavBar;




















