import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <Link to="/" className="footer-link">
        <i className="bi bi-house-door footer-icon" aria-hidden="true"></i>
      </Link>
      <Link to="/video" className="footer-link">
        <i className="bi bi-file-play footer-icon" aria-hidden="true"></i>
      </Link>
    </footer>
  );
};

export default Footer;
