import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import SideNav from '../layout/SideNav';
import AuthContext from '../../context/auth/authContext';
import Avatar from '../../assets/logos/grouper.png';
import Spinner from '../layout/Spinner';
import NavbarInside from '../layout/NavbarInside';

const GroupInfo = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [shgData, setshgData] = useState([]);

  useEffect(() => {
    authContext.loadUser();
    getGroup();
    // eslint-disable-next-line
  }, []);

  const getGroup = async () => {
    try {
      const res = await axios.get('/api/group');
      console.log(res.data);
      setshgData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleJoin = async (id) => {
    try {
      const res = await axios.post(`/api/requests/${id}`);
      console.log(res);
      swal({
        title: 'Success',
        text: 'Request sent successfully!',
        icon: 'success',
      });
    } catch (err) {
      swal({
        title: 'Failed',
        text: 'Request already sent!',
        icon: 'info',
      });
      console.log(err);
    }
  };

  return (
    <>
      <div className='home-outer'>
        <div>
          <NavbarInside />
        </div>
        <div className='mainin'>
          <div className='mainin-1'>
            <br />
            <h1>List of Available SHGs </h1>
            <div>
              {shgData.length === 0 ? (
                <Spinner />
              ) : (
                shgData &&
                shgData.map((data) => {
                  if (data.business === user.skill)
                    return (
                      <>
                        <center>
                          <div className='cardss row' align='left'>
                            <div className='cards-inner-1 col-sm-2 cardspanner'>
                              <img className='avatar-card2' src={Avatar}></img>
                            </div>
                            <div className='cards-inner-2 col-sm-10'>
                              <h3 className='headingss text-left'>
                                {data.name}
                              </h3>
                              <ul className='list-cards'>
                                <li className='li-card'>
                                  <b>Representative</b> {'->'}{' '}
                                  {data.representative}
                                </li>
                                <li className='li-card'>
                                  <b>Active Members</b> {'->'} {data.members}
                                </li>
                                <li className='li-card'>
                                  <b>Contact Number</b> {'->'} {data.phone}
                                </li>
                                <li className='li-card'>
                                  <b>Business</b> {'->'} {data.business}
                                </li>
                                <li align='left'>
                                  <button
                                    className='btn-sbmt'
                                    style={{
                                      marginTop: '30px',
                                      backgroundColor: '#9dc08b',
                                      color: 'white',
                                      width: '150px',
                                      position: 'relative',
                                    }}
                                    onClick={() => handleJoin(data._id)}
                                  >
                                    Join
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </center>
                      </>
                    );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupInfo;
