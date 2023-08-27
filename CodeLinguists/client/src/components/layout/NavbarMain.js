import '../../assets/css/navbar.css';
//import { Link } from 'react-router-dom';
import '../../assets/css/modal.css';
import image1 from '../../assets/logos/logo_main.png';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Donate from './Donate';

const NavbarMain = () => {
  let URL;
  if (process.env.NODE_ENV === 'production') {
    URL = 'https://adya-support.herokuapp.com';
  } else {
    URL = 'http://localhost:3000';
  }
  return (
    <>
      <nav className='nav'>
        <div className='nav-header'>
          <div className='nav-title'>
            
            <span className='nav-title-inner'>
            <img src={image1} />
            </span>
          </div>
        </div>
        <div className='nav-btn'>
          <label htmlFor='nav-check'>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <input type='checkbox' id='nav-check'></input>
        <div className='nav-links'>
          <a href={`${URL}/#home`} className='jhk'>
            HOME
          </a>
          <a href={`${URL}/#about`}>ABOUT</a>
          <a href={`${URL}/#contact`}>CONTACT</a>
          <a href={`${URL}/#donate`}>DONATE</a>
          <Donate />
          <a href={`${URL}/#login`} className='loginbtn'>
            LOGIN
          </a>
          <Login />
          <a href={`${URL}/#signup`} className='signupbtn'>
            SIGNUP
          </a>
          <Register />
        </div>
      </nav>
    </>
  );
};

export default NavbarMain;
