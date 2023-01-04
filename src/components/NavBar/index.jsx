import './Style.css';
import CartWidget from '../CartWidget';

function NavBar() {
  return (
    <div className="navBar">
      <div className='logo'>
        Logo
      </div>
      <div>
        <ul className='lista'>
          <li>Mangas</li>
          <li>Preventas</li>
          <li>Comics</li>
        </ul>
      </div>
      <div className='carrito'>
        <CartWidget />
      </div>

    </div>
  );
}

export default NavBar;





















