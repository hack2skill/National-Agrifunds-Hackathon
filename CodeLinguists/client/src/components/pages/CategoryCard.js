import { connect } from 'mongoose';
import React, { useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import '../../assets/css/home.css';
import Avatar from '../../assets/logos/avatar2.png';

const CategoryCard = ({ connectingUsers }) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='mainin-1 right-right' align='center'>
      <br />
      <br />
      <br />
      <h1>Connect with Peers </h1>
      {connectingUsers.map((connect) => {
        if (
          // connect.district === user.district &&
          connect._id !== user._id
        )
          return (
            <div className='cardss row' align='left' key={connect._id}>
              <div className='col-sm-12'>
                <div className='row'>
                  <div className='cards-inner-1 col-sm-2 cardspanner'>
                    <img className='avatar-card' src={Avatar}></img>
                  </div>
                  <div className='cards-inner-2 col-sm-10'>
                    <h3 className='headingss text-left'>{connect.name}</h3>
                    <ul className='list-cards'>
                      <li className='li-card'>
                        <b>Mobile Number</b> {':'} {connect.phone}
                      </li>
                      <li className='li-card'>
                        <b> Skills </b> {':'} {connect.skill}
                      </li>
                      <li className='li-card'>
                        <b> Individual / Associated </b> {':'} {connect.group}
                      </li>
                      <li className='li-card'>
                        <b> District</b> {':'}{' '}
                        {connect.district || connect.address.district}
                      </li>
                      <li className='li-card'>
                        <b>State</b> {':'}{' '}
                        {connect.state || connect.address.state}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default CategoryCard;
