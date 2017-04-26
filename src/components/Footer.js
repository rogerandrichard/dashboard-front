import React from 'react'
import HomeStars from '../images/homestars_logo.png'
const Footer = () => {

  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="facebook-link">
              <h4 className="_14">Visit our Facebook page</h4>
              <a target="_blank" href="https://www.facebook.com/whitesharkwindows/" className="center-block">
                <i className="fa fa-facebook"></i>
              </a>
            </div>
            <div className="footer-social-icons">
              <h4 className="_14">Read our reviews on HomeStars</h4>
              <a target="_blank" href="https://homestars.com/companies/229833-white-shark-window-cleaning?service_area=1792369" className="social-icon">
                <img src={HomeStars}/>
              </a>
            </div>
            <div className="col-lg-12">
              <p className="text-center">Copyright &copy; 2015 White Shark Ltd</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}



export default Footer
