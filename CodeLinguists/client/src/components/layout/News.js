import { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import '../../assets/css/news.css';
import '../../assets/css/news-cards.css';
import NewsPhoto from '../../assets/images/NEWS-1.png';
import AOS from "aos";

const News = () => {
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

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <>
      <div className='hello-about' id='about'></div>
      <div className='news-main'>
        <div className='news-inner'>
                <div className='news-heading2'>
                    <h1> समाचार / </h1>
                </div>
                <div className='news-heading'>
                    <h1> NEWS. </h1>
                </div>
          <div className='news-inner-inner'>
            <figure class="icon-cards mt-3"  data-aos="fade-left">
              <div class="icon-cards__content">
                <div class="icon-cards__item d-flex align-items-center justify-content-center">

                </div>
                <div class="icon-cards__item d-flex align-items-center justify-content-center">

                </div>
                <div class="icon-cards__item d-flex align-items-center justify-content-center">

                </div>
                <div class="icon-cards__item d-flex align-items-center justify-content-center">

                </div>
                <div class="icon-cards__item d-flex align-items-center justify-content-center">

                </div>
                <div class="icon-cards__item d-flex align-items-center justify-content-center">

                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
