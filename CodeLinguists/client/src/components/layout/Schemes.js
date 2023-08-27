import React, { useEffect } from "react";
import '../../assets/css/schemes.css';
import AOS from "aos";

const Schemes = () => {

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
        <div className='schemes-outer'>
            <div className='schemes-inner row'>
            <div className='schemes-inner1 col-sm-1'>
                <div className='schemes-heading2'>
                    <h1> योजनाएं / </h1>
                </div>
                <div className='schemes-heading'>
                    <h1> SCHEMES. </h1>
                </div>
            </div>
            <div className="page-content col-sm-11">
            
                <div className="cardcard" data-aos="fade-up">
                    <div className="content">
                    <h2 className="title">PM KISAN MAAN DHAN YOJNA </h2>
                    <p className="copy">Scheme to provide social security to Small and Marginal Farmers in their old age.</p>
                    <a href="https://vikaspedia.in/schemesall/schemes-for-farmers/pm-kisan-maan-dhan-yojana" target="_blank" rel="noopener noreferrer"><button className="btnschemes">Know More!</button></a>
                    </div>
                </div>
                <div className="cardcard" data-aos="fade-down">
                    <div className="content">
                    <h2 className="title">PM KRISHI SINCHAI YOJANA </h2>
                    <p className="copy">Scheme to ensure access to protective irrigation to all agricultural farms in the country.</p>
                    <a href="https://pmksy.gov.in/" target="_blank" rel="noopener noreferrer"><button className="btnschemes">Know More!</button></a>
                    </div>
                </div>
                <div className="cardcard" data-aos="fade-up">
                    <div className="content">
                    <h2 className="title">KRISHI UDAN SCHEME</h2>
                    <p className="copy"> This scheme will be implemented at 53 airports across the country and is likely to benefit farmer, freight forwarders and Airlines.</p>
                    <a href="https://vikaspedia.in/schemesall/schemes-for-farmers/krishi-udan-scheme" target="_blank" rel="noopener noreferrer"><button className="btnschemes">Know More!</button></a>
                    </div>
                </div>
                <div className="cardcard" data-aos="fade-down">
                    <div className="content">
                    <h2 className="title">PARAMPARAGAT KRISHI VIKAS YOJANA</h2>
                    <p className="copy">The initiative promotes farmers to use traditional and organic farming practices, reducing their reliance on chemical inputs. </p>
                    <a href="https://darpg.gov.in/sites/default/files/Paramparagat%20Krishi%20Vikas%20Yojana.pdf" target="_blank" rel="noopener noreferrer"><button className="btnschemes">Know More!</button></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Schemes;