import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 className="mywelcome">Crypto Currency App</h1>
      <Link to="/home"><button type="button">
          Home Page
     </button></Link>
      <Link to="/chartspage"><button type="button">
          See chart 
     </button></Link>
    </div>

    
  );
};

export default Header;
