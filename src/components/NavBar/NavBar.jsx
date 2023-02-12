import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
  return (
    <div className="cabeza">
    <div className='row, cabeza'>
      <div className='col-md-6'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}><img alt={"logo"}  width={52}
                 src={"/images/Logo.jpg"} /></Link>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                         <li className="nav-item, text"> 
                               <NavLink  className="nav-link"  to='/'>Productos</NavLink>
                           </li>
                           <li className="nav-item"> 
                               <NavLink  className="nav-link"  to='/category/Mangas'>Mangas</NavLink>
                           </li>
                           <li className="nav-item"> 
                               <NavLink  className="nav-link"   to='/category/Comics'>Comics</NavLink >
                           </li>
                      </ul>
                  </div>    
            </div>  
            <div>
  <CartWidget />
</div> 
        </nav>
      </div>
  </div>
  </div>
  );

}

export default NavBar;




















