import React from 'react'
import { useEffect } from "react";
import "../../assets/css/testimonials.css";
import image1 from "../../assets/images/test1.jpg";
import image2 from "../../assets/images/RumaDevi2.jpg";
import image3 from "../../assets/images/test2.jpg";
import "../../assets/css/testimonials.css";
import testimonial from '../../assets/images/testimoniall2.png';
import AOS from "aos";

function Testimonials() {

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
    <div>
        <center>
        <div className="testimonial-section">
        <div className='hal row'>
          <div className='col-sm-10'>
            <div className='row'>
            <div className='col-sm-4'>
            <div className="testimonial-img" data-aos="zoom-in-right">       
                <div className="testi-img" style={{display:'flex',flexDirection:'column'}}>
                  <div>
                      <center>
                          <div className='women-cont'>
                              <img src={image1} alt="img" className="women" />
                              <p className="paraaa"><b>RAMU KUMAR</b></p>
                              <div>
                                  <img src={testimonial} alt="img" className="women-below" />
                              </div>
                          </div>
                      </center>
                  </div>
                  <p className="paraa">KrishiKosh is one of the simplest platforms which I have come across. With the help of them I was able to get a loan using the Pradhan Mantri Krishi Yojna. 
                  I bought seeds and fertilizers to again start paddy farming. Big thanks to KrishiKosh for their timely support.</p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
            <div className="testimonial-img" data-aos="zoom-in-down">       
                <div className="testi-img" style={{display:'flex',flexDirection:'column'}}>
                  <div>
                      <center>
                          <div className='women-cont'>
                              <img src={image2} alt="img" className="women" />
                              <p className="paraaa"><b>SITA SHARMA</b></p>
                              <div>
                                  <img src={testimonial} alt="img" className="women-below" />
                              </div>
                          </div>
                      </center>
                  </div>
                  <p className="paraa">I was always unable to avail government schemes due to lack of knowledge and understanding. My friend told me about the
                  door to door service of KrishiKosh. They were just one call away. And now I have availed two schemes in just 1 month of time. Thank you KrishiKosh for aways being their. 
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className="testimonial-img" data-aos="zoom-in-left">       
                <div className="testi-img" style={{display:'flex',flexDirection:'column'}}>
                  <div>
                      <center>
                          <div className='women-cont'>
                              <img src={image3} alt="img" className="women" />
                              <p className="paraaa"><b>GYAN GUPTA</b></p>
                              <div>
                                  <img src={testimonial} alt="img" className="women-below" />
                              </div>
                          </div>
                      </center>
                  </div>
                  <p className="paraa"> I came to know aout KrishiKosh when their team visited our village for conducting a session on financial literacy. 
                  I opened my account with them and am able to send money to my brother who lives in another village. 
                  They have a seamless fund deposit system. </p>
                </div>
              </div>
            </div>
            </div>
            </div>
          <div className='col-sm-2'>
                <div className='test-heading2'>
                    <h1> प्रशंसापत्र / </h1>
                </div>
                <div className='test-heading'>
                    <h1> TESTIMONIALS. </h1>
                </div>
          </div>
        </div>
        </div>
        </center>
    </div>
  )
}

export default Testimonials