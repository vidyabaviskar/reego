import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'; 

import amex from '../payment/amex.png';
import mastercard from '../payment/mastercard.png';
import visa from '../payment/visa.png';
import rupay from '../payment/rupay.png';
import netbanking from '../payment/netbanking.png';
import paytm from '../payment/paytm.png';
import paypal from '../payment/paypal.png';

const Contact = () => {
  return (
    <footer id="contact" className="footer glassmorphism-footer">
      <div className="container py-5">
        <div className="row">
          
          {/* Useful Links Section */}
          <div className="col-md-3">
            <h5 className="text-black">USEFUL LINKS</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-black">Home</a></li>
              <li><a href="#about" className="text-black">About</a></li>
              <li><a href="/moreproducts" className="text-black">Products</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3">
            <h5 className="text-black">CONTACT</h5>
            <p className="text-black">
              Dr Ingles Cancer Laparoscopy Clinic & Surgical Hospital, Jalgaon HO, Jalgaon, Maharashtra, 425001
            </p>
            <p className="text-black">+91-9823441662</p>
          </div>

          {/* Connect Section */}
          <div className="col-md-3">
            <h5 className="text-black">CONNECT</h5>
            <div className="social-media d-flex flex-column">
              <div className="d-flex align-items-center my-1">
                <FaFacebookF className="me-2" />
                <a href="https://www.facebook.com/reegochairs" target="_blank" rel="noopener noreferrer" className="text-black">
                  Facebook
                </a>
              </div>
              <div className="d-flex align-items-center my-1">
                <FaInstagram className="me-2" />
                <a href="https://www.instagram.com/reegochairs" target="_blank" rel="noopener noreferrer" className="text-black">
                  Instagram
                </a>
              </div>
              <div className="d-flex align-items-center my-1">
                <FaYoutube className="me-2" />
                <a href="https://www.youtube.com/@reegochairs" target="_blank" rel="noopener noreferrer" className="text-black">
                  YouTube
                </a>
              </div>
              <div className="d-flex align-items-center my-1">
                <MdEmail className="me-2" />
                <a href="mailto:sales@reegochairs.com" className="text-black">
                  Email
                </a>
              </div>
              <div className="d-flex align-items-center my-1">
                <FaPhoneAlt className="me-2" />
                <a href="tel:+9730189700" className="text-black">
                  Phone
                </a>
              </div>
            </div>
          </div>

          {/* Payments Section */}
          <div className="col-md-3">
            <h5 className="text-black">PAYMENTS</h5>
            <div className="payment-icons">
              <img src={amex} alt="Amex" className="img-fluid" />
              <img src={mastercard} alt="Mastercard" className="img-fluid" />
              <img src={visa} alt="Visa" className="img-fluid" />
              <img src={rupay} alt="RuPay" className="img-fluid" />
              <img src={netbanking} alt="Net Banking" className="img-fluid" />
              <img src={paytm} alt="Paytm" className="img-fluid" />
              <img src={paypal} alt="PayPal" className="img-fluid" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Contact;
