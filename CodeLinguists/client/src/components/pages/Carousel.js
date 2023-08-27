import Pic1 from '../../assets/images/PIC1.PNG';
import Pic2 from '../../assets/images/PIC2.PNG';
import Pic3 from '../../assets/images/PIC3.PNG';
import Pic4 from '../../assets/images/PIC4.PNG';
import Pic5 from '../../assets/images/PIC5.PNG';

const Carousel = () => {
    return ( 
        <div className="carousel-mainin">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-150 carousel-imager" src={Pic1} alt="First slide"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p className="ppp">Kamla from Azamnagar using our website to learn new skills</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-150 carousel-imager" src={Pic2} alt="Second slide"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p className="ppp">Kanta  from  Ramgarh is using our website to find a company to sell her baskets</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-150 carousel-imager" src={Pic3} alt="Third slide"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p className="ppp">Malti  from  Palampur is using our website to find peers for her new buisness</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-150 carousel-imager" src={Pic4} alt="Fourth slide"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p className="ppp">Geeta from  Chandpur is using our website to get financial support for her new start up</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-150 carousel-imager" src={Pic5} alt="Fifth slide"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p className="ppp">Kunti from  Pranpur is using our website to find new members for her SHG</p>
  </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="hello-arrows-1"><span className="carousel-control-prev-icon" aria-hidden="true"></span></span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
  <span className="hello-arrows-2"><span className="carousel-control-next-icon hello-arrows" aria-hidden="true"></span></span>
  </a>
</div>
        </div>
     );
}
 
export default Carousel;