import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const LoanForm = () => {
  const [loan, setLoan] = useState({
    purpose: '',
    amount: '',
    assets: '',
    time: '',
    scheme: '',
  });

  const { purpose, amount, assets, time, scheme } = loan;

  const onChange = (e) => setLoan({ ...loan, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      purpose === '' ||
      amount === '' ||
      assets === '' ||
      time === '' ||
      scheme === ''
    ) {
      swal({
        text: 'Please enter all fields',
        icon: 'error',
      });
    } else {
      const formData = {
        purpose,
        amount,
        assets,
        time,
        scheme,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      try {
        const res = await axios.post('/api/loan', formData, config);
        swal({
          title: 'Success',
          text: res.data.msg,
          icon: 'success',
        });
      } catch (err) {
        swal({
          text: 'Already applied for the help.',
          icon: 'error',
        });
      }
    }
  };

  return (
    <div className='wrapper wrapper33'>
      <h1>
        <br />
        Financial Help
      </h1>
      <form onSubmit={onSubmit}>
        <div className='row'>
        <div className='form-group col-sm-6'>
          <label htmlFor='purpose'>Enter the purpose of the Loan : </label>
          <input
            type='text'
            name='purpose'
            value={purpose}
            onChange={onChange}
            autoComplete='off'
            required
          />
        </div>
        <div className='form-group col-sm-6'>
          <label htmlFor='amount'>Enter the Amount needed : </label>
          <input
            type='number'
            name='amount'
            value={amount}
            onChange={onChange}
            autoComplete='off'
            required
          />
        </div>
        </div>
        <div className='row'>
          <div className='form-group col-sm-6'>
            <label htmlFor='assets'>Do you have assets for the loan? </label>
            <input
              type='text'
              name='assets'
              value={assets}
              onChange={onChange} autoComplete="off"
              required
            />
          </div>
        </div>
        <div className='row'>
        <div className='form-group col-sm-6'>
          <label htmlFor='time'>Enter the time duration within which the loan is required : </label>
          <input
            type='text'
            name='time'
            value={time}
            onChange={onChange}
            autoComplete='off'
            required
          />
        </div>
        <div className='form-group col-sm-6'>
          <label htmlFor='scheme'>Under which scheme do you want to apply? </label>
          <input
            type='text'
            name='scheme'
            value={scheme}
            onChange={onChange}
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
      </form>
    </div>
  );
};

export default LoanForm;
