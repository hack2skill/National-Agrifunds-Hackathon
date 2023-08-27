import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import { connect } from 'mongoose';
import AuthContext from '../../context/auth/authContext';
import SideNav from '../layout/SideNav';
import '../../assets/css/home.css';
import Updatelogo from '../../assets/logos/update-logo.png';
import Namelogo from '../../assets/logos/name.svg';
import passwordlogo from '../../assets/logos/password.svg';
import skilllogo from '../../assets/logos/skill.svg';
import shglogo from '../../assets/logos/shg.svg';
import phonelogo from '../../assets/logos/phone.svg';
import NavbarInside from '../layout/NavbarInside';
import swal from 'sweetalert';
import axios from 'axios';

const Settings = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const [userName, setUserName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [userState, setUserState] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');
  const [gender, setGender] = useState('');
  const [group, setGroup] = useState('');
  const [skill, setSkill] = useState('');
  const [pin, setPin] = useState('');
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (user) {
      setUserName(user.name);
      setPhoneNo(user.phone);
      setEmail(user.email);
      setGroup(user.group);
      setSkill(user.skill);
      setGender(user.gender);
      setDob(user.dob);
      setAge(user.age);
      if (user.address) {
        setUserState(user.address.state);
        setDistrict(user.address.district);
        setCity(user.address.city);
        setLocality(user.address.locality);
      }
    }
  }, [user]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: userName,
      gender,
      phoneNo,
      email,
      dob,
      age,
      state: userState,
      district,
      city,
      locality,
      skill,
      group,
      pin,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put(`/api/users/${user._id}`, formData, config);
      swal({
        text: 'User data successfully updated!',
        icon: 'success',
      });
      authContext.loadUser();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setCanEdit(!canEdit);
  };

  return (
    <div className='home-outer'>
      <div>
        <NavbarInside />
      </div>
      <div className='wrapper wrapper22' style={{ marginTop: '200px' }}>
        <h1 className='heading-settings'>Manage Profile</h1>
        {user && (
          <div className='settings-box'>
            <form>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='name'>Name : </label>
                  <span>
                    <img className='updater' src={Namelogo}></img>
                  </span>
                  <input
                    type='text'
                    name='namee'
                    placeholder={userName === '' ? 'Enter your name' : userName}
                    value={userName}
                    disabled={!canEdit}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='gender'>Gender : </label>
                  <span>
                    <img className='updater' src={phonelogo}></img>
                  </span>
                  <input
                    type='text'
                    name='gender'
                    placeholder={
                      !gender || gender === '' ? 'Enter your gender' : gender
                    }
                    value={gender}
                    disabled={!canEdit}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='email'>Email : </label>
                  <span>
                    <img className='updater' src={phonelogo}></img>
                  </span>
                  <input
                    type='text'
                    name='email'
                    placeholder={
                      email && email !== '' ? email : 'Enter your email address'
                    }
                    value={email}
                    disabled={!canEdit}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='phonenumber'>Phone Number : </label>
                  <span>
                    <img className='updater' src={phonelogo}></img>
                  </span>
                  <input
                    type='text'
                    name='phone'
                    placeholder={
                      phoneNo === '' ? 'Enter your phone number' : phoneNo
                    }
                    value={phoneNo}
                    disabled={!canEdit}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='dob'>Date of Birth : </label>
                  <span>
                    <img className='updater' src={Namelogo}></img>
                  </span>
                  <input
                    type='date'
                    name='dob'
                    placeholder='dd/mm/yyyy'
                    value={dob}
                    disabled={!canEdit}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='age'>Age : </label>
                  <span>
                    <img className='updater' src={phonelogo}></img>
                  </span>
                  <input
                    type='text'
                    name='age'
                    placeholder={age && age !== '' ? age : 'Enter your age'}
                    value={age}
                    disabled={!canEdit}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='state'>State : </label>
                  <span>
                    <img className='updater' src={Namelogo}></img>
                  </span>
                  <input
                    type='text'
                    name='state'
                    placeholder={
                      userState === '' ? 'Enter your state' : userState
                    }
                    value={userState}
                    disabled={!canEdit}
                    onChange={(e) => setUserState(e.target.value)}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='district'>District : </label>
                  <span>
                    <img className='updater' src={phonelogo}></img>
                  </span>
                  <input
                    type='text'
                    name='district'
                    placeholder={
                      district === '' ? 'Enter your district' : district
                    }
                    value={district}
                    disabled={!canEdit}
                    onChange={(e) => setDistrict(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='city'>City : </label>
                  <span>
                    <img className='updater' src={Namelogo}></img>
                  </span>
                  <input
                    type='text'
                    name='city'
                    placeholder={city === '' ? 'Enter your city' : city}
                    value={city}
                    disabled={!canEdit}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='locality'>Locality : </label>
                  <span>
                    <img className='updater' src={phonelogo}></img>
                  </span>
                  <input
                    type='text'
                    name='locality'
                    placeholder={
                      locality === '' ? 'Enter your locality' : locality
                    }
                    value={locality}
                    disabled={!canEdit}
                    onChange={(e) => setLocality(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='skill'>Skill : </label>
                  <span>
                    <img className='updater' src={skilllogo}></img>
                  </span>
                  <input
                    type='text'
                    name='skill'
                    placeholder={skill === '' ? 'Enter your skill' : skill}
                    value={skill}
                    disabled={!canEdit}
                    onChange={(e) => setSkill(e.target.value)}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='group'>
                    Individual/Associated with a SHG :{' '}
                  </label>
                  <span>
                    <img className='updater' src={shglogo}></img>
                  </span>
                  <input
                    type='text'
                    name='group'
                    placeholder={
                      group === '' ? 'Enter your group status' : group
                    }
                    value={group}
                    disabled={!canEdit}
                    onChange={(e) => setGroup(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='pin'>PIN : </label>
                  <span>
                    <img className='updater' src={passwordlogo}></img>
                  </span>
                  <input
                    type='password'
                    name='password'
                    placeholder='****'
                    value={pin}
                    disabled={!canEdit}
                    onChange={(e) => setPin(e.target.value)}
                  />
                </div>
              </div>
              <br></br>
              <div className='row'>
                <button
                  className='btn-sbmt col-sm-6'
                  onClick={(e) => handleEdit(e)}
                >
                  EDIT
                </button>
                <input
                  type='submit'
                  value='UPDATE'
                  className='btn-sbmt col-sm-6'
                  onClick={onSubmit}
                />
              </div>
              <ul class='bg-bubbles'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
