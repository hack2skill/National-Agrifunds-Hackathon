import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import SideNav from '../layout/SideNav';
import LoanForm from './LoanForm';
import DepositForm from './DepositForm';
import '../../assets/css/home.css';
import NavbarInside from '../layout/NavbarInside';


const DepositFunds = () => {
  return (
    <div className='home-outer'>
      <div>
        <NavbarInside />
      </div>
      <div>
        <DepositForm />
      </div>
      
    </div>
  );
  
};
export default DepositFunds
