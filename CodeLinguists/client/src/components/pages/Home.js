import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import '../../assets/css/home.css';
import Girlava from '../../assets/logos/girlava.png';
import Carousel from '../pages/Carousel';
import NavbarInside from '../layout/NavbarInside2';
import profilephoto from '../../assets/images/profile-photo.jpg';
import shgphoto from '../../assets/images/receive.jpg';
import loanphoto from '../../assets/images/aunty1.jpg';
import customerimg from '../../assets/images/customer-support.jpg';
import sellproduct from '../../assets/images/farmer-scheme.png';
import connectimg from '../../assets/images/uncle.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='home-outer home-overflow'>
        <div>
          <NavbarInside />
        </div>

        <div className='main'>
          <div className='main-in'>
            <div className='home-box-outer row'>
              
              <div className='home-box col-sm-4'>
              <Link to='/financehelp'>
                <center>
                  <div className='home-box-heading'>
                      <i class="fa-solid fa-coins"></i> Apply for Loan
                  </div>
                  <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={loanphoto} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr1 col-sm-8'>
                    We provide you with a platform through which our experts will assist you in obtaining loans through various government programmes.
                    </div>  
                  </div>
                </center>
                </Link>
              </div>
              
              <div className='home-box col-sm-4'>
                <center>
                <Link to='/depositfunds'>
                  <div className='home-box-heading'>
                  <i class="fa-solid fa-handshake"></i> Deposit Funds
                  </div>
                  <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={connectimg} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr2 col-sm-8'>
                    We build a strong network of female entrepreneurs to foster a supportive, learning, and collaborative environment.
                    </div>  
                  </div>
                  </Link>
                </center>
              </div>
              <div className='home-box col-sm-4'>
                <center>
                <Link to='/transactionlog'>
                  <div className='home-box-heading'>
                  <i class="fa-solid fa-user-group"></i> Sent/Received Funds
                  </div>
                  <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={shgphoto} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr3 col-sm-8'>
                    The procedure to send and receive funds is simplified for the farmers.
                    </div>  
                  </div>
                  </Link>
                </center>
              </div>
            </div>

            <div className='home-box-outer row'>
              <div className='home-box col-sm-4'>
              <center>
                <Link to='/availscheme'>
                <div className='home-box-heading'>
                <i class="fa-solid fa-shop"></i> Avail government scheme
                </div>
                <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={sellproduct} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr4 col-sm-8'>
                    Through our portal various government schemes developed especially for the farmers can be availed by filling the form.
                    </div>  
                  </div>
                  </Link>
              </center>
              </div>
              <div className='home-box col-sm-4'>
                <center>
                <Link to='/contactpage'>
                <div className='home-box-heading'>
                <i class="fa-solid fa-headset"></i> Door Step Service
                </div>
                <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={customerimg} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr5 col-sm-8'>
                    We address customer issues and resolve them in a timely and efficient manner and provide our customers with 24X7 accessibility.
                    </div>  
                  </div>
                  </Link>
                </center>
              </div>
              <div className='home-box col-sm-4'>
                <center>
                  <Link to='/settings'>
                  <div className='home-box-heading'>
                  <i class="fa-solid fa-address-card"></i> Manage Profile
                  </div>
                  <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={profilephoto} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr6 col-sm-8'>
                    The Manage Profile page allows users to change their name, address & skills. Users  can also change their login credentials, i.e, phone number and pin.
                    </div>  
                  </div>
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>

          {/* <div className='main-carousel'>
            <h1>
              <i>Some of our Happy Customers!</i>
            </h1>
            <center>
              <Carousel />
            </center>
          </div> */}
      </div>
    </>
  );
};

export default Home;
