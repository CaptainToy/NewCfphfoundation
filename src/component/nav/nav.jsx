import Logo from "../../assets/logo.png";
import React, { useState } from "react";

const Nav=()=>{
     const [showAllPages, setShowAllPages] = useState(false);
    
      const handleDropdownClick = () => {
        setShowAllPages(!showAllPages);
      };
    return(
        <nav className="header-navbar">
        <div className="header-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="header-nav-links">
          <button className="header-dropdown" onClick={handleDropdownClick}>
            All Pages <i className="bi bi-arrow-down-short"></i> {/* Added className */}
          </button>
          <button className="list">Programs</button>
          <button className="list blog">Blog</button>
          <button className="header-donate-btn">Donate Now</button>
        </div>
      </nav>
    )
} 

export default Nav