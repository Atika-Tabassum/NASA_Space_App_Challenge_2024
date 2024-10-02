import React from "react";
import "../general/general.css";
import logo from "../Home/image/logo8-removebg-preview.png";
const Header = () => {
    return (<header>
        <div class="header-icons">
          <div>
            <div class="logo-section">
              <img src={logo} alt="logo" className="logo-icon" />
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;