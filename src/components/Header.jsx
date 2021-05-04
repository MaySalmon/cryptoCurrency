import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 className="mywelcome">Crypto Currency App</h1>
      <Link to="/home"><button type="button" class="btn btn-secondary">
          Home Page
     </button></Link>
      <Link to="/chartspage"><button type="button" class="btn btn-info" >
          See chart 
     </button></Link>
    </div>

    
  );
};

export default Header;
