import '../../assets/css/navbar.css';
import AuthContext from '../../context/auth/authContext';
//import LogoMain from '../../assets/logos/logo_main.png';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/modal.css';
// import Login from '../auth/Login';
// import Register from '../auth/Register';
import Girlava from '../../assets/logos/girlava.png';
//import arrowback from '../../assets/images/arrow-back.svg';

const NavbarInside = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  const onLogout = () => {
    logout();
  };

  const { user } = authContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <nav className='nav nav-inside'>
        <div className='nav-header'>
          <div className='nav-title'>
            <div className='row'>
              <div className='col-sm-2'>
                <img src={Girlava} className='navbar-inside-logo'></img>
              </div>
              <div className='col-sm-10'>
                <span className=''>
                  WELCOME
                  <p>{user && user.name}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='nav-btn'>
          <label htmlFor='nav-check'>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className='nav-btn-22 navbar-back-arrow'>
          <Link to='/home'>
            <i class='fa-solid fa-2x fa-circle-chevron-left'></i>
          </Link>
        </div>
        <input type='checkbox' id='nav-check'></input>
        <div className='nav-links'>
          <Link to='/home'>HOME</Link>
          <Link to='/financehelp'>APPLY FOR LOAN</Link>
          <Link to='/categories'>CONNECT WITH PEERS</Link>
          <Link to='/shgroups'>SELF HELP GROUPS</Link>
          <Link to='/'>SELL YOUR PRODUCTS</Link>
          <Link to='/'>CUSTOMER SUPPORT</Link>
          <Link to='/settings'>MANAGE PROFILE</Link>
          <Link onClick={onLogout} to='/' className='loginbtn'>
            LOGOUT
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarInside;
