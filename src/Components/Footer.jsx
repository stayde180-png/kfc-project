import { useState } from "react";

import "../App.css";

const Footer = () => {
  return (
    <footer className="foot-panel">
      <div className="footer-container">

        <div className="footer-logo">
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
            alt="KFC Logo"
          />
        </div>

        <ul>
          <p>KFC India</p>
          <li>About KFC</li>
          <li>KFC Care</li>
          <li>Careers</li>
          <li>Our Golden Past</li>
          <li>Responsible Disclosure</li>
        </ul>

        <ul>
          <p>Legal</p>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Disclaimer</li>
          <li>Caution Notice</li>
        </ul>

        <ul>
          <p>KFC Food</p>
          <li>Menu</li>
          <li>Order Lookup</li>
          <li>Gift Card</li>
          <li>Nutrition & Allergen</li>
        </ul>

        <ul>
          <p>Support</p>
          <li>Get Help</li>
          <li>Contact Us</li>
          <li>KFC Feedback</li>
        </ul>

        <ul>
          <p>Find a KFC</p>
        </ul>

        <div className="download-app">
          <img src="YOUR_GOOGLE_PLAY_IMAGE" alt="Google Play" />
          <img src="YOUR_APP_STORE_IMAGE" alt="App Store" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
