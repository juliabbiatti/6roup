import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header style={{ backgroundColor: "#7d7d7d", color: "#bfbfbf" }}>
      <nav>
        <div>Logo</div>
        <div>
          <ul>
            <li> <Link to="/">Home</Link></li>
           <li> <Link to="/shop">Shop</Link></li>
           <li> <Link to="/contact">Contact</Link></li>

          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
