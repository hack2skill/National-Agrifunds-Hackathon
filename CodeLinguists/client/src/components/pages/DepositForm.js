import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import NavbarInside from '../layout/NavbarInside';
import AuthContext from '../../context/auth/authContext';
import '../../assets/css/home.css';

const DepositForm = () => {
  return (
    <div className='home-outer'>
    <div>
      <NavbarInside />
    </div>
    <div className='wrapper'>
      <form>
        <h1>Fund Deposit Form</h1>

        <div className='row'>
          <div className='form-group col-sm-6'>
            <label htmlFor='name'>
              Enter the name of benificiary:{' '}
            </label>
            <input
              name='name'
            //   onChange={onChange}
              type='text'
              autoComplete='off'
              required
            />
          </div>

          <div className='form-group col-sm-6'>
            <label htmlFor='representative'>
             Account number of Beneficiary :{' '}
            </label>
            <input
              name='representative'
            //   onChange={onChange}
              type='text'
              autoComplete='off'
              required
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-sm-6'>
            <label htmlFor='members'>Enter the amount : </label>
            <input
              name='members'
            //   onChange={onChange}
              type='text'
              autoComplete='off'
              required
            />
          </div>

          <div className='form-group col-sm-6'>
            <label htmlFor='phone'>
            Enter KCC number:{' '}
            </label>
            <input
              type='text'
              name='phone'
            //   onChange={onChange}
              autoComplete='off'
              minLength='10'
              maxLength='10'
              required
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-sm-6'>
            <label htmlFor='business'>
            Enter the email address to receive verification OTP :{' '}
            </label>
            <input
              name='business'
            //   onChange={onChange}
              type='text'
              autoComplete='off'
              required
            />
          </div>

          <div className='form-group col-sm-6'>
            <label htmlFor='assistance'>
            Enter the OTP : {' '}
            </label>
            <input
              name='assistance'
            //   onChange={onChange}
              type='text'
              autoComplete='off'
              required
            />
          </div>
        </div>

        <input type='submit' value='Submit' className='btn-sbmt' />
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
  </div>
);
  
}

export default DepositForm