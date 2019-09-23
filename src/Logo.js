import React from "react";

import logo from "../src/img/Lambda_Logo_white.png";
// import logo from "/Users/scottrenz/Documents/GitHub/nasa-photo-of-the-day/img/Lambda_Logo_white.png";
const logoColor = {
  color: 'white',
  backgroundColor: 'darkred',
  marginLeft: '100%',
  marginTop: '2%',

}

const Logo = () => {
  return (
    <div className="logo-container">
      <img style={logoColor} className="logo" src={logo} alt="Lambda's logo" />
    </div>
  );
};

export default Logo;
