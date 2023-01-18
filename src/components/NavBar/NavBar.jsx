import './navbar.css';
import ItemListContainer from '../../pages/ItemListContainer/ItemListContainer';
import CartWidget from '../CartWidget';

import React from 'react'

const NavBar = () => {
  return (
    <div className="navBar">
    <div className='logo'>
      <img src='../img/logo.jpg'></img>
    </div>
    <nav>
      <ItemListContainer
        itemUno="Mangas"
        itemDos="Preventas"
        itemTres="Comics" />
    </nav>
    <div className='carrito'>
      <CartWidget />
    </div>
  </div>
  )
  
}

export default NavBar




















