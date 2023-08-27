import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import SideNav from '../layout/SideNav';
import LoanForm from './LoanForm';
import '../../assets/css/home.css';
import NavbarInside from '../layout/NavbarInside';

const FinanceHelp = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='home-outer'>
      <div>
        <NavbarInside />
      </div>
      <div>
        <LoanForm />
      </div>
    </div>
  );
};

export default FinanceHelp;
