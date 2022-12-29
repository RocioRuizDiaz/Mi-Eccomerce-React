import  "../style/navbar.css"
import React from "react";
import CartWidget  from  "../CartWidget";


export const NavBar = () => {
    return (
        
            <nav className="nav">
                <a className="logo" href="#">Mangasho</a>
                <ul className="nav_list">
                    <li>
                        <a className="nav__link" href="#">Mangas</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Categoria</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#"><CartWidget/></a>
                    </li>
                </ul>

            </nav>

       
    );
}

export default NavBar;