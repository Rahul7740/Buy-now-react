import { Link, NavLink } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/header.css"
import menuLinks from "../json/menuLInks.json"
import { useState } from "react";


function Header() {
  const [menu,setMenu]=useState(false)
 
  return (
    <>
      <div className="header-top-bar-sectoin ">
        <div className="container">
          <div className="header-top-bar-content">
            <div className="display-flex">
              <img className="display-block-none-375" src={SvgPath.headerTopBarLogo} alt="free delivery logo" />
              <p>Free delivery on $100.00</p>
            </div>
            <div className="display-flex">
              <Link className="header-topBar-Links">Help center</Link>
              <img src={SvgPath.verticalLine20px} alt="vertical-line" />
              <Link className="header-topBar-Links display-block-none-700">Returns policy</Link>
              <img src={SvgPath.verticalLine20px} alt="vertical-line" />
              <Link className="header-topBar-Links display-block-none-700">Support  (+00) 0123456789</Link>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="container">
          <div className="header-section">
            <div className="main-logo-container">
              <img className="display-block-none-700" src={SvgPath.mainLogo} alt="logo" />
              <img className="display-none-block-700" src={SvgPath.mainLogoRes} alt="logo" />
              <ul className={`navbar-nav ${menu===true && "show-navbar"}`} >
                {menuLinks.map((i, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink className="nav-link" activeclassname="active" >{i.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="searchBar-and-user-container">
              <div className="searchBar-container">
                <img src={SvgPath.searchIcon} alt="searchIcon" />
                <input type="text" placeholder="Search" />
                <button className="search-all-btn">
                  <p>ALL</p>
                  <img src={SvgPath.downArrowWhite} alt="downArrow" />
                </button>
              </div>
              <div className="user-container">
                <button className="display-none-block-1100"><img src={SvgPath.searchGray} alt="search" /></button>
                <img className="display-none-block-1100 display-block-none-700" src={SvgPath.verticalLine20px} alt="vertical" />
                <button className="display-block-none-700"><img src={SvgPath.headerLangaugeicon} alt="langauge" /></button>
                <img className="display-block-none-700" src={SvgPath.verticalLine20px} alt="vertical" />
                <button><img src={SvgPath.headerCartIcon} alt="cart" /></button>
                <img className="display-block-none-700" src={SvgPath.verticalLine20px} alt="vertical" />
                <button className="display-block-none-375"><img src={SvgPath.headerUserIcon} alt="user" /></button>
                <button onClick={()=>{setMenu(true)}} style={{display:`${menu===true ? "none":"block"} `}} className="display-none-block-700"><img src={SvgPath.menuIcon} alt="menu" /></button>
                <button onClick={()=>{setMenu(false)}} style={{display:`${menu===false ? "none":"block"} `}} className="display-none-block-700"><img src={SvgPath.closeBtn} alt="menu" /></button>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  );
}

export default Header;
