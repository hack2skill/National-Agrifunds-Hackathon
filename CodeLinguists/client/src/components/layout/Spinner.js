import React, { Fragment } from 'react';
import spinner from '../../assets/images/loader.gif';
import '../../assets/css/home.css';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      className="loader-main"
      alt='Loading...'
    />
  </Fragment>
);

export default Spinner;
