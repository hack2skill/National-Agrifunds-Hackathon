import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layout/Spinner';
import CategoryCard from './CategoryCard';
import '../../assets/css/home.css';
import NavbarInside from '../layout/NavbarInside';

const Categories = () => {
  const authContext = useContext(AuthContext);
  const [connect, setConnect] = useState([]);

  const displayUsers = async () => {
    try {
      const res = await axios.get('/api/skill');
      setConnect(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    displayUsers();
  }, []);

  console.log(connect);

  return (
    <div className='home-outer'>
      <div>
        <NavbarInside />
      </div>
      <div className='connecter-cont'>
        {connect.length !== 0 ? (
          <CategoryCard connectingUsers={connect} />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Categories;
