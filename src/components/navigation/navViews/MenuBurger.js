// import libaries
import React from 'react';
import { Link } from 'react-router-dom';


function MenuBurger({sidenav, showSidenav}){

    return(
        <Link
            to='#'
            className={sidenav ? 'menu-btn is-active' : 'menu-btn'}
            onClick={showSidenav}>
            <div className={sidenav ? 'menu-burger is-active' : 'menu-burger'} />
        </Link>
    )

}


export default MenuBurger;