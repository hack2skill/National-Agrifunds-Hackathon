import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import '../../assets/css/modal.css';
import '../../assets/css/form.css';
import Loader from '../../assets/images/Loader123.gif';

const Register = (props) => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  let URL;
  if (process.env.NODE_ENV === 'production') {
    URL = 'https://adya-support.herokuapp.com';
  } else {
    URL = 'http://localhost:3000';
  }
  useEffect(() => {
    if (isAuthenticated) {
      // props.history.push('/');
      const link = document.createElement('a');
      link.href = `${URL}/home`;
      link.click();
    }

    if (error === 'User already exists') {
      swal({
        text: error,
        icon: 'error',
      });
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    phone: '',
    skill: '',
    state: '',
    district: '',
    address: '',
    group: '',
    password: '',
    password2: '',
  });

  const {
    name,
    phone,
    skill,
    state,
    district,
    address,
    group,
    password,
    password2,
  } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name === '' ||
      phone === '' ||
      skill === '' ||
      state === '' ||
      district === '' ||
      address === '' ||
      group === '' ||
      password === '' ||
      password2 === ''
    ) {
      swal({
        text: 'Please enter all fields',
        icon: 'error',
      });
    } else if (password !== password2) {
      swal({
        text: 'Passwords do not match',
        icon: 'error',
      });
    } else {
      register({
        name,
        phone,
        skill,
        state,
        district,
        address,
        group,
        password,
      });
    }
  };

  return (
    <>
      <div id='signup' className='modal-window2'>
        <div>
          <a href='#' title='Close' class='modal-close'>
            Close
          </a>
          <h1>SIGN UP</h1>
          <form onSubmit={onSubmit}>
            <div className='row'>
              <div className='form-group col-md-4'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={onChange}
                  required
                  autoComplete='off'
                />
              </div>
              <div className='form-group col-md-4'>
                <label htmlFor='phone'>Phone Number</label>
                <input
                  type='text'
                  name='phone'
                  value={phone}
                  onChange={onChange}
                  required
                  minLength='10'
                  maxLength='10'
                  autoComplete='off'
                />
              </div>
              <div className='form-group col-md-4'>
                <label htmlFor='skill'>Skill</label>
                <input
                  type='text'
                  name='skill'
                  value={skill}
                  onChange={onChange}
                  required
                  autoComplete='off'
                />
              </div>
            </div>

            <div className='row'>
              <div className='form-group col-md-6'>
                <label htmlFor='group'>Address</label>
                <input
                  type='text'
                  name='address'
                  value={address}
                  onChange={onChange}
                  required
                  autoComplete='off'
                />
              </div>

              <div className='form-group col-md-3'>
                <label htmlFor='district'>District</label>
                <input
                  type='text'
                  name='district'
                  value={district}
                  onChange={onChange}
                  required
                  autoComplete='off'
                />
              </div>

              <div className='form-group col-md-3'>
                <label htmlFor='state'>State</label>
                <input
                  type='text'
                  name='state'
                  value={state}
                  onChange={onChange}
                  required
                  autoComplete='off'
                />
              </div>

            </div>

            <div className='row'>
              <div className='form-group col-md-6'>
                <label htmlFor='group'>Individual/Associated with SHG</label>
                <input
                  type='text'
                  name='group'
                  value={group}
                  onChange={onChange}
                  required
                  autoComplete='off'
                />
              </div>
              <div className='form-group col-md-3'>
                <label htmlFor='password'>PIN</label>
                <input
                  type='password'
                  name='password'
                  value={password}
                  onChange={onChange}
                  required
                  minLength='4'
                  autoComplete='off'
                  className='pinner'
                />
              </div>
              <div className='form-group col-md-3'>
                <label htmlFor='password2'>Confirm PIN</label>
                <input
                  type='password'
                  name='password2'
                  value={password2}
                  onChange={onChange}
                  required
                  minLength='4'
                  autoComplete='off'
                  className='pinner'
                />
              </div>
            </div>
            <button type='submit' value='Register' className='btn-sbmt'>
              Sign up <img src={Loader} className='loginbtn-loader'></img>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
