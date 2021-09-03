// import libaries
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCalendar } from 'react-icons/ai'

// import components
import Navbar from 'react-bootstrap/Navbar';

function NavbarBrand({user}){
    return(
        <Navbar.Brand>
            <Link className={!user ? 'fw-bold text-dark' : 'fw-bold text-color'} to='/'>
                <AiOutlineCalendar /> 
                {' '}
                Calendar-todo
            </Link>
        </Navbar.Brand>
    )
}

export default NavbarBrand;