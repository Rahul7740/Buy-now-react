import { Link, NavLink } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/header.css";
import menuLinks from "../json/menuLInks.json";
import resMenuLInks from "../json/res-menuLinks.json";
import { useState } from "react";
import searchRecents from "../json/serach-recents.json";
function Header() {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <>
      <div className="header-top-bar-sectoin ">
        <div className="container">
          <div className="header-top-bar-content">
            <div className="display-flex">
              <img
                className="display-block-none-375"
                src={SvgPath.headerTopBarLogo}
                alt="free delivery logo"
              />
              <p className="header-topBar-Links">Free delivery on $100.00</p>
            </div>
            <div className="display-flex">
              <Link to={"/helpCenter"} className="header-topBar-Links">
                Help center
              </Link>
              <img src={SvgPath.verticalLine20px} alt="vertical-line" />
              <Link className="header-topBar-Links display-block-none-700">
                Returns policy
              </Link>
              <img src={SvgPath.verticalLine20px} alt="vertical-line" />
              <Link className="header-topBar-Links display-block-none-700">
                Support (+00) 0123456789
              </Link>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="container">
          <div className="header-section">
            <div className="main-logo-container">
              <Link to={"/"}>
                <img
                  className="display-block-none-700"
                  src={SvgPath.mainLogo}
                  alt="logo"
                />
              </Link>
              <Link to={"/"}>
                <img
                  className="display-none-block-700"
                  src={SvgPath.mainLogoRes}
                  alt="logo"
                />
              </Link>
              <ul className="navbar-nav">
                {menuLinks.map((i, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink
                      to={i.to}
                      className="nav-link"
                      activeclassname="active"
                    >
                      {i.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`res-menu-bar  ${menu === true && "show-navbar"}`}>
              <div className="res-menu-header">
                <div className="menu-user-div">
                  <img src={SvgPath.menuUserImg} alt="user" />
                  <div>
                    <h3>Tiana Baptista</h3>
                    <p>tim.jennings@example.com</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <img src={SvgPath.menuCLoseBtn} alt="CLOSE" />
                </button>
              </div>
              <div className="res-menu-navBar">
                <div className="res-menu-navBar-content">
                  {resMenuLInks.map((item, index) => (
                    <NavLink
                      onClick={() => {
                        setMenu(false);
                      }}
                      key={index}
                      className="res-menuLinks"
                      to={item.to}
                      activeclassname="active"
                    >
                      <img
                        src={require(`../assets/svg/${item.img}`)}
                        alt="sections"
                      />
                      <p>{item.name} </p>
                    </NavLink>
                  ))}
                  <div className="menu-login-signUp-container">
                    <Link>Log In</Link>
                    <Link>Sign Up</Link>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setMenu(false);
                  }}
                  className="res-menu-side-design"
                ></div>
              </div>
              <div className="menu-support-Btn">
                <a className="menu-support-Btn" href="tel:(+00) 0123456789">
                  Support (+00) 0123456789
                </a>
              </div>
            </div>
            <div className="searchBar-and-user-container">
              <div className={`searchBar-container`}>
                <div>
                  <img src={SvgPath.searchIcon} alt="searchIcon" />
                  <input type="text" placeholder="Search" />
                  <button
                    onClick={() => {
                      setSearch(false);
                    }}
                    className={`display-none-block-1100 ${search === false ? "serach-close-show" : ""
                      }`}
                  >
                    <img
                      style={{ paddingRight: "5px" }}
                      src={SvgPath.closeBtn}
                      alt="CLOSE"
                    />
                  </button>
                </div>

                <button className="search-all-btn">
                  ALL
                  <img src={SvgPath.downArrowWhite} alt="downArrow" />
                </button>
              </div>
              <div
                className={`res-searchBar  ${search === true && "showSearch"}`}
              >
                <div className="res-search-head">
                  <button
                    onClick={() => {
                      setSearch(false);
                    }}
                  >
                    <img src={SvgPath.arrowBack} alt="back" />
                  </button>
                  <div>
                    <img src={SvgPath.searchIcon} alt="searchIcon" />
                    <input type="text" placeholder="Search" />
                  </div>
                  <button>
                    <img
                      src={
                        require("../assets/svg/res-search-menu-btn.svg").default
                      }
                      alt="serach-menu"
                    />
                  </button>
                </div>
                <p className="serach-recent-text">Recent</p>
                <div className="serach-recent-container">
                  {searchRecents.map((item, index) => (
                    <div key={index} className="search-recnets">
                      <p>{item.name}</p>
                      <button>
                        <img
                          src={
                            require("../assets/svg/serach-recents-cut-btn.svg")
                              .default
                          }
                          alt="cut"
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="user-container">
                <button
                  onClick={() => {
                    setSearch(true);
                  }}
                  className="display-none-block-1100"
                >
                  <img src={SvgPath.searchGray} alt="search" />
                </button>
                <img
                  className="search-icon-vertical-line"
                  src={SvgPath.verticalLine20px}
                  alt="vertical"
                />

                <button className="display-block-none-700">
                  <img src={SvgPath.headerLangaugeicon} alt="langauge" />
                </button>
                <img
                  className="display-block-none-700"
                  src={SvgPath.verticalLine20px}
                  alt="vertical"
                />
                <Link to={"/cart"}>
                  <img src={SvgPath.headerCartIcon} alt="cart" />
                </Link>
                <img
                  className="display-block-none-700"
                  src={SvgPath.verticalLine20px}
                  alt="vertical"
                />
                <button className="display-block-none-375">
                  <img src={SvgPath.headerUserIcon} alt="user" />
                </button>
                <button
                  onClick={() => {
                    setMenu(true);
                  }}
                  className={`display-none-block-700 `}
                >
                  <img src={SvgPath.menuIcon} alt="menu" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;