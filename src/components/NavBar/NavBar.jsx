import './navbar.css';
import ButtonAddCart from '../Button/ButtonAddCart';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
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
             </ul>
                <div className='cart'>
                    <box-icon name='cart'></box-icon>
                    <span>0</span>
                </div>
                <ButtonAddCart />

                </nav>
    </header>

  );

}

export default NavBar;




















