import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import SideNav from '../layout/SideNav';
import LoanForm from './LoanForm';
import SchemeForm from './SchemeForm';
import '../../assets/css/home.css';
import NavbarInside from '../layout/NavbarInside';


const SchemeAvail = () => {
  return (
    <div className='home-outer'>
      <div>
        <NavbarInside />
      </div>
      <div>
        <SchemeForm />
      </div>
    </div>
  );
  
};
export default SchemeAvail