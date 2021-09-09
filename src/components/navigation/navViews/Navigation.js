// import libaries 
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IoIosNotificationsOutline } from 'react-icons/io'
import { VscSignOut } from 'react-icons/vsc';

// import components
import { Navbar, Container } from 'react-bootstrap';
import NavbarBrand from './NavbarBrand';
import MenuBurger from './MenuBurger';


// navigation
function Navigation ({sidenav, showSidenav, user, logOutUser, howManyTasks}){

    let history = useHistory();
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        if(howManyTasks === 0){
            setNotification(false);
        } else {
            setNotification(true);
        }

    },[howManyTasks]);

    return(
        <Navbar bg={user ? 'transparent' : 'transparent'} expand='lg' className={user ? 'shadow-5-strong border-bottom-thin' : ''}>
            <Container fluid className='nav'>
            {!user &&
                <NavbarBrand /> 
            }
            {user && 
            <>
                <MenuBurger 
                  state={sidenav}
                  showState={showSidenav}/> 
            </>
            }
                <div className='nav-link'>
                    {!user &&
                    <>
                        <Link
                          className='link text-secondary no-user'  
                          to='/react-calendar/users/login'>
                              Logga in
                        </Link>
                        <Link 
                          className='link text-secondary no-user'
                          to='/react-calendar/users/signup'>
                              Skapa konto
                        </Link>
                    </>
                    }
                    {user &&
                    <>
                        <Link
                          className='link text-secondary nav-icon user' 
                          onClick={e => logOutUser(e, history)}
                          to='/react-calendar'>
                              <VscSignOut className='icon-btn' /> 
                              <div className='info-bubble logout'>Logga ut</div>
                        </Link>
                        <Link 
                          className='link text-secondary nav-icon user'
                          to='#'>
                              <IoIosNotificationsOutline className='icon-btn'/> 
                              <div className='info-bubble notification'>Antal uppgifter kvar med deadline idag eller tidigare</div>
                              <div className={notification ? 'notification-bubble text-white fw-bold is-active' : 'notification-bubble text-white fw-bold'}>{howManyTasks}</div>
                        </Link>
                    </>
                    }
                </div>
            </Container>
        </Navbar>
    )
}


export default Navigation;