import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Dropdown from "./Dropdown"

 
const SchemeForm = () => {
  const [selected, setSelected]=useState("Choose One"); 
  return (
    <div className='wrapper wrapper33'>
      <h1>
        <br />
        Avail Government Scheme
      </h1>
      {/* <form onSubmit={onSubmit}> */}
        <div className='row'>
        <div className='form-group col-sm-6'>
          <label htmlFor='purpose'>Enter the name of the scheme : </label>
          <div className='drop'>
          <Dropdown selected={selected} setSelected={setSelected}/>
          </div>
        </div>
        </div>
        <div className='row'>
          <div className='form-group col-sm-6'>
            <label htmlFor='assets'>Purpose of availing </label>
            <input
              type='text'
              name='assets'
            //   value={assets}
            //   onChange={onChange} 
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className='row'>
        <div className='form-group col-sm-6'>
          <label htmlFor='time'>Enter your Aadhar Card number </label>
          <input
            type='text'
            name='time'
            // value={time}
            // onChange={onChange}
            autoComplete='off'
            required
          />
        </div>
        </div>
        <input
          type='submit'
          value='Submit'
          className='btn-sbmt'
        />
          <ul class="bg-bubbles">
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
      {/* </form> */}
    </div>
  );
  
}

export default SchemeForm