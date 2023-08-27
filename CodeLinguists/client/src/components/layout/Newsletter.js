import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/css/modal.css'
import Loader from '../../assets/images/Loader123.gif';
import swal from 'sweetalert';
const Newsletter = () => {

    const [email, setEmail] = useState('');

    const onChange = (e) => setEmail(e.target.value);
  
    const onSubmit = async (e) => {
      e.preventDefault();
      if (email === '') {
        swal({
          text: 'Please enter your email',
          icon: 'error',
        });
      } else {
        const formData = {
          email,
        };
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        try {
          const res = await axios.post('/api/news', formData, config);
          swal({
            title: 'Success',
            text: res.data.msg,
            icon: 'success',
          });
        } catch (err) {
          swal({
            text: 'Already applied for newsletter',
            icon: 'error',
          });
        }
      }
    };

    return ( 
        <>
    <div id="subnews" className="modal-window">
      <div>
        <a href="#" title="Close" class="modal-close">Close</a>
          <h1>Subscribe to our Newsletter!</h1>
          <form onSubmit={onSubmit}>
          <div className='form-group'>
            
            <label htmlFor='email'>Email</label>
            <input
                    type='email'
                    name='newsletter'
                    onChange={onChange}
                    placeholder='example@xyz.com'
                    autoComplete='off'
                    required
                  />
          </div>
          
          <div className='btn-sbmt-cont'>
          <button type='submit' value='subscribe' className='btn-sbmt'>Subscribe <img src={Loader} className='loginbtn-loader'></img></button>        
          </div>
          </form>
      </div>
    </div>
        </>
     );
}
 
export default Newsletter;