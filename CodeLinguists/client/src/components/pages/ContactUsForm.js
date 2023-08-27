import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import NavbarInside from '../layout/NavbarInside';
import AuthContext from '../../context/auth/authContext';
import '../../assets/css/home.css';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { DatePicker } from '@mui/x-date-picker'
// import { DatePicker } from '@mui/x-date-picker/DatePicker'
// import { DatePicker } from '@mui/x-date-picker-pro'
// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
// import Paper from '@mui/material/Paper';
// import  DateTimePicker from '@mui/x-date-pickers/DateTimePicker';
import DatePicker from 'rsuite/DatePicker';





const ContactUsForm = () => {
  //const[value, setValue]=useState(new Date())
  return (
    <div className='home-outer'>
    <div>
      <NavbarInside />
    </div>
    <div className='wrapper'>
      <form>
        <h1>Get In Touch</h1>

        <div className='row'>
          <div className='form-group col-sm-6'>
            <label htmlFor='name'>
              Name:{' '}
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
             Email Id :{' '}
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
            <label htmlFor='members'>Phone Number : </label>
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
            Slot for Call Back:{' '}
            <div className='dateTimePicker'>
          <DatePicker
    format="yyyy-MM-dd HH:mm:ss"
    calendarDefaultDate={new Date('2022-02-02 00:00:00')}
    ranges={[
      {
        label: 'Now',
        value: new Date()
      }
    ]}
    style={{ width: 260 }}
    editable={true}
    showMeridian
  />
           </div>
            </label>
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
      {/* <DateTimePicker onChange={setValue} value={value}/> */}
    </div>
  </div>
);
  
}

export default ContactUsForm