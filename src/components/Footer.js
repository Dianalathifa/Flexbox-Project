import React from 'react';
import '../App.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h3>MelodyMasterClass</h3>
                    <p>Your Music Learning Platform</p>
                </div>
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: info@melodymasterclass.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Address: Madiun, East Java</p>
                </div>
            </div>
            <div className="footer-social">
                <a href="https://www.facebook.com/melodymasterclass" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/melodymasterclass" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/melodymasterclass" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
