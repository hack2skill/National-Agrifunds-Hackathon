  import React, { useEffect } from 'react';
  import '../../assets/css/about.css';
  import logoabt1 from '../../assets/logos/finance.png';
  import logoabt2 from '../../assets/logos/bank.png';
  import logoabt3 from '../../assets/logos/credit.png';
  import AOS from 'aos';
  
  const About = () => {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  
    useEffect(() => {
      AOS.init({
        duration: 500,
      });
    }, []);
  
    return (
      <>
        <div className='hello-about' id='about'></div>
        <div className='about-main'>
          <div className='about-inner row'>
            <div className='abouter about-1 col-sm-4' data-aos='zoom-in-right'>
              <div className='about-text'>
                <h2><img src={logoabt1} className='about-img'></img> <span style={{marginLeft: '13px'}}>Financial</span> <br /> <span style={{marginLeft:'70px'}}>Inclusion</span></h2> 
                <p>
                Provides a range of financial services to unbanked populations, 
                with the goal of promoting financial inclusion and improving their access to financial resources.
                </p>
              </div>
            </div>
  
            <div className='abouter about-2 col-sm-4' data-aos='zoom-in-down'>
              <div className='about-text'>
                <h2><img src={logoabt2} className='about-img'></img> <span style={{marginLeft: '12px'}}>Doorstep</span><br></br><span style={{marginLeft:'69px'}}>Banking</span> </h2>
                <p className='p1'>
                Offer various banking services directly at the customer's doorstep, 
                rather than requiring customers to visit a bank branch physically.
                </p>
              </div>
            </div>
  
            <div className='abouter about-3 col-sm-4' data-aos='zoom-in-left'>
              <div className='about-text'>
                <h2><img src={logoabt3} className='about-img'></img><span style={{marginLeft: '13px'}}> Credit and </span> <br></br> <span style={{marginLeft: '70px'}}>Loans</span> </h2>
                <p>
                Facilitate the process of applying for agricultural loans and credit by offering an online application platform. 
                Provide information about various loan options, interest rates, and repayment terms. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default About;
  
  