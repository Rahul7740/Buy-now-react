import { Link, NavLink } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/header.css"
import menuLinks from "../json/menuLInks.json"
import { useState } from "react";


function Header() {
  const [menu, setMenu] = useState(false);

  const [search, setSearch] = useState(false)

  return (
    <>
      <div className="header-top-bar-sectoin ">
        <div className="container">
          <div className="header-top-bar-content">
            <div className="display-flex">
              <img className="display-block-none-375" src={SvgPath.headerTopBarLogo} alt="free delivery logo" />
              <p className="header-topBar-Links">Free delivery on $100.00</p>
            </div>
            <div className="display-flex">
              <Link to={"/helpCenter"} className="header-topBar-Links">Help center</Link>
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
              <Link to={"/"}>
                <img className="display-block-none-700" src={SvgPath.mainLogo} alt="logo" />
              </Link>
              <Link to={"/"}>
                <img className="display-none-block-700" src={SvgPath.mainLogoRes} alt="logo" />
              </Link>
              <ul className={`navbar-nav ${menu === true && "show-navbar"}`} >
                {menuLinks.map((i, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink to={i.to} className={`nav-link ${menu === true && "start-navlink-animation"}`} activeclassname="active" >{i.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="searchBar-and-user-container">
              <div className={`searchBar-container ${search === true && "showSearch"}`}>
                <div>
                  <img src={SvgPath.searchIcon} alt="searchIcon" />
                  <input type="text" placeholder="Search" />
                  <button onClick={() => { setSearch(false) }} className={`display-none-block-1100 ${search === false ? "serach-close-show" : ""}`}><img style={{paddingRight:"5px"}} src={SvgPath.closeBtn} alt="CLOSE" /></button>
                </div>

                <button className="search-all-btn">ALL<img src={SvgPath.downArrowWhite} alt="downArrow" /></button>
              </div>
              <div className="user-container">
                <button onClick={() => { setSearch(true) }} className={`display-none-block-1100 ${search === true ? "serach-close-show" : ""}`}><img src={SvgPath.searchGray} alt="search" /></button>
                <img className="search-icon-vertical-line" src={SvgPath.verticalLine20px} alt="vertical" />

                <button className="display-block-none-700"><img src={SvgPath.headerLangaugeicon} alt="langauge" /></button>
                <img className="display-block-none-700" src={SvgPath.verticalLine20px} alt="vertical" />
                <Link to={"/cart"}><img src={SvgPath.headerCartIcon} alt="cart" /></Link>
                <img className="display-block-none-700" src={SvgPath.verticalLine20px} alt="vertical" />
                <button className="display-block-none-375"><img src={SvgPath.headerUserIcon} alt="user" /></button>
                <button onClick={() => { setMenu(true) }} className={`display-none-block-700 ${menu === true ? "menuIcon-show" : ""}`} ><img src={SvgPath.menuIcon} alt="menu" /></button>
                <button onClick={() => { setMenu(false) }} className={`display-none-block-700 ${menu === false ? "menuIcon-show" : ""}`}><img src={SvgPath.closeBtn} alt="CLOSE" /></button>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  );
}

export default Header;
