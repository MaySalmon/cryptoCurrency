import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 className="text-center text-warning mt-3 mb-4">Coinstar</h1>
      <Link to="/home"><button type="button">
          Home Page
     </button></Link>
      <Link to="/chartspage"><button type="button">
          Go to chart
     </button></Link>
    </div>

    
  );
};

export default Header;
