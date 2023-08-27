import '../../assets/css/home.css';
import '../../assets/css/modal.css';
import SideNav from '../layout/SideNav';
import Requests from '../pages/Requests';
import AuthContext from '../../context/auth/authContext';
import Avatars from '../../assets/logos/shg.svg';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import NavbarInside from '../layout/NavbarInside';

const YourGroup = ({ group }) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [myGroup, setMyGroup] = useState(group);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!group && user) {
      getMyGroup();
    }
  }, [user]);

  const getMyGroup = async () => {
    try {
      const res = await axios.get('/api/group');
      res.data &&
        res.data.map((g) => {
          if (g.representative == user.name || g.representative == user._id)
            return setMyGroup(g);
        });
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(myGroup);

  return (
    <div className='home-outer'>
      <div>
        <NavbarInside />
      </div>
      <div>
        <div className='mainin'>
          <div className='mainin-1'>
            <br />
            <br />
            <h1>Your Self Help Group </h1>
            <div>
              {myGroup && (
                <div className='cardss-outer' key={myGroup.name} align='center'>
                  <center>
                    <div className='cardss row' align='left'>
                      <div className='cards-inner-1 col-sm-2'>
                        <img className='avatar-card' src={Avatars}></img>
                      </div>
                      <div className='cards-inner-2 col-sm-10'>
                        <h3 className='headingss text-left'>{myGroup.name}</h3>
                        <ul className='list-cards'>
                          <li className='li-card'>
                            <b>Representative</b> {'->'}{' '}
                            {myGroup.representative}
                          </li>
                          <li className='li-card'>
                            <b>Active Members</b> {'->'} {myGroup.members}
                          </li>
                          <li className='li-card'>
                            <b>Mobile Number</b> {'->'} {myGroup.phone}
                          </li>
                          <li className='li-card'>
                            <b>Business</b> {'->'} {myGroup.business}
                          </li>
                          {myGroup.representative == user.name ||
                            (myGroup.representative == user._id && (
                              <li align='left'>
                                <button
                                  className='btn-sbmt'
                                  style={{
                                    marginTop: '30px',
                                    backgroundColor: '#fc2956',
                                    color: 'white',
                                    width: '200px',
                                    position: 'relative',
                                    left: '-50px',
                                  }}
                                >
                                  <input type='checkbox' id='modal'></input>
                                  <label for='modal' className='example-label'>
                                    See Requests {'>'}
                                  </label>
                                  <label
                                    for='modal'
                                    className='modal-background'
                                  ></label>
                                  <div class='modal'>
                                    <div class='modal-header'>
                                      <h3>Join Requests</h3>
                                      <label htmlFor='modal'>
                                        <img
                                          className='img-cross'
                                          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAABNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0N3NIOAAAAJnRSTlMAAQIDBAUGBwgRFRYZGiEjQ3l7hYaqtLm8vsDFx87a4uvv8fP1+bbY9ZEAAAB8SURBVBhXXY5LFoJAAMOCIP4VBRXEv5j7H9HFDOizu2TRFljedgCQHeocWHVaAWStXnKyl2oVWI+kd1XLvFV1D7Ng3qrWKYMZ+MdEhk3gbhw59KvlH0eTnf2mgiRwvQ7NW6aqNmncukKhnvo/zzlQ2PR/HgsAJkncH6XwAcr0FUY5BVeFAAAAAElFTkSuQmCC'
                                          width='16'
                                          height='16'
                                          alt=''
                                        />
                                      </label>
                                    </div>
                                    <p style={{ color: 'black' }}>
                                      <Requests shg_id={myGroup._id} />
                                    </p>
                                  </div>
                                </button>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </center>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourGroup;
