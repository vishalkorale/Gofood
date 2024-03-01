import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (

    <footer className="footer">
      <div className="container">
        <div className="footer-text text-center  ">
          &copy; 2024 Food Delivery App. All rights reserved.
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;