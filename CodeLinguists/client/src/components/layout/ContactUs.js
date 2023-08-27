import '../../assets/css/contact.css';
import '../../assets/css/modal.css'
import Newsletter from './Newsletter';
import Map from './Map'
import News from './News';
import logoName from "../../assets/images/logoName.jpeg";
const location = {
    address: 'Dwarka, Delhi.',
    lat: 28.5823,
    lng: 77.0500,
}

const ContactUs = () => {
    return ( 
        <>
        <div className="hello-cons" id="contact"></div>
        <div className="contact">
            <div className="contact-inner row">
                <div className="contact-left col-sm-6">
                    <img src={logoName} className='logo-contact'></img>
                    <br />

                    {/* <img src={LogoMain} className='logo-contact'></img> */}

                    <div className='contact-left-text'>
                        
                    कृषिकोश  an initiative to cater to the financial needs of Indian farmers, with the overarching goal of 
                    improving their financial inclusion and overall economic well-being. It offers a comprehensive range of 
                    services and resources that empower farmers to manage their finances more effectively.
                        
                        <br></br><br></br>
                        
                        We assist farmers by providing them information about various loan options, interest rates, and repayment terms.
                        We assist our customers in obtaining subsidies, bank loans, raising awareness of current government initiatives and schemes.
                        We assist them in obtaining Kisan Credit card.

                    </div>
                </div>
                <div className="contact-right col-sm-6">
                    <div className='mapper'>
                        {/* <Map location={location} zoomLevel={17} className='mapper-map' />  */}
                        <div className='contact-right-heading'>
                            USEFUL LINKS
                        </div>
                        <div className='contact-right-links'>
                            <div><a className='con-link' href=''><i class="fa-solid fa-1x fa-circle-chevron-right"></i>Digital Resources for financial literacy</a></div>
                            <div><a className='con-link' href=''><i class="fa-solid fa-1x fa-circle-chevron-right"></i> Get Involved</a></div>
                            <div><a className='con-link' href=''><i class="fa-solid fa-1x fa-circle-chevron-right"></i> Apply for Kisan Credit Card</a></div>
                            <div><a className='con-link' href="#subnews"><i class="fa-solid fa-1x fa-circle-chevron-right"></i> Subscribe to Newsletter</a><Newsletter /></div>
                        </div>
                        <div className='social-media-buttons-contact'>
                            <a target="blank" href="tel:+91-9910545503">
                                <li class="fa-solid fa-phone fa-2x ln"></li>
                            </a>
                            <a target="blank" href="mailto:adya.venture@gmail.com">
                                <li class="fa-solid fa-envelope fa-2x ln"></li>
                            </a>
                            <a target="blank" href="">
                                <li class="fab fa-facebook fa-2x git"></li>
                            </a>
                            <a target="blank" href="">
                                <li class="fab fa-instagram fa-2x insta"></li>
                            </a>
                            <a target="blank" href="">
                                <li class="fab fa-twitter fa-2x"></li>
                            </a>
                            <p>© कृषिकोश | All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        );
}
export default ContactUs;