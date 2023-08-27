import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import SideNav from '../layout/SideNav';
import LoanForm from './LoanForm';
import DepositForm from './DepositForm';
import '../../assets/css/home.css';
import NavbarInside from '../layout/NavbarInside';
import Log from "../../assets/images/Tara.png";


const TransactionLog = () => {
  return (
    <div className='home-outer'>
      <div>
        <NavbarInside />
      </div>
      <div>
        <img src={Log} />
      </div>
      
    </div>
  );
  
};
export default TransactionLog
