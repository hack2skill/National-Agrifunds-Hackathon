import '../../assets/css/modal.css';
import DonateImg from '../../assets/images/charity.svg';
import Loader from '../../assets/images/Loader123.gif';
const Donate = () => {
    return ( 
        <>
    <div id="donate" className="modal-window2">
      <div>
        <a href="#" title="Close" class="modal-close">Close</a>
          <h1>Donate</h1>
          <form>

        <div className='row'>
          <div className='form-group col-sm-4'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              autoComplete='off'
              onChange=""
              required
            />
          </div>

          <div className='form-group col-sm-4'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              onChange=""
              autoComplete='off'
              required
            />
          </div>
              
          <div className='form-group col-sm-4'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='text'
              name='phone'
              onChange=""
              autoComplete='off'
              minLength="10" maxLength="10"
              required
            />
          </div>
        </div>

        <div className='row'>
              
          <div className='form-group col-sm-4'>
            <label htmlFor='country'>Country</label>
            <input
              type='text'
              name='country'
              onChange=""
              autoComplete='off'
              minLength="10" maxLength="10"
              required
            />
          </div>

          <div className='form-group col-sm-4'>
            <label htmlFor='amt'>Amount</label>
            <input
              type='number'
              name='amt'
              onChange=""
              autoComplete='off'
              required
            />
          </div>
          
          <div className='form-group col-sm-4'>
            <label htmlFor='pan'>PAN Number</label>
            <input
              type='text'
              name='pan'
              autoComplete='off'
              onChange=""
              required
            />
          </div>
        </div>

          <div className='btn-sbmt-cont'>
          <button type='submit' value='Login' className='btn-sbmt'>Donate <img src={Loader} className='loginbtn-loader'></img></button>
          
          </div>
          </form>
      </div>
    </div>
        </>
     );
}
 
export default Donate;