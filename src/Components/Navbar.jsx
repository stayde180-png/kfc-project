import React from "react";
import "../App.css";
const Navbar = () => {
  return (
    
    <>
      {/* Top Navbar */}
      <div className="navbar1">
        <div className="main">
          <p>Allow location access for local store menu and promos</p>
          <p className="set-location">Set Location</p>
        </div>
      </div>
      <hr />
      {/* Main Navbar */}
      <div className="navbar2">
        <div className="heading">
          <img
            src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
            alt="KFC Logo"
          />
        </div>

        <div className="menu">Menu</div>
        <div className="deal">Deal</div>
          
          

         <div className="sign">
          <a href="./Signin">
            <b>Sign in</b>
          </a>
        </div>

        
        <div className="bucket">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CC2AwXSSFEcjgcNcmrKVcG4YtVH6JIzBlg&s"
            alt="Bucket"
          />
        </div>
      </div>
      <hr />

      {/* Hero Section */}
      <div className="hero-section">
        <p className="store">
          <b>Allow location access for local store menu and promos</b>
        </p>
        <p className="set-order">Set Orders</p>
      </div>
    </>
  );
};

export default Navbar;
