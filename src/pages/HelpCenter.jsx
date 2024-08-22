import React, { useState} from "react";
import { Link } from "react-router-dom";
import "../style/helpCenter.css";
import SvgPath from "../assets/svg/SvgPath";
import NewsLetter from "../home/NewsLetter";
import helpCenterContent from "../json/helpCenterContents.json";

function HelpCenter() {
  // Initialize the openIndex based on helpCenterContent
  const [openIndex, setOpenIndex] = useState(
    helpCenterContent.findIndex(item => item.o) // Find the index where item.o is true
  );

  const handleToggle = (index, isOpen) => {
    setOpenIndex(isOpen ? index : null);
  };

  return (
    <>
      <section className="all-sections">
        <div className="container">
          <div className="sections-header helpCenter-head">
            <div>
              <h2>Top Deals</h2>
              <div className="pages-directions-div">
                <Link to={"/"}>Home</Link>
                <img src={SvgPath.arrowLIneRight} alt="forward" />
                <Link to={"/productsFilter"}>Products</Link>
              </div>
            </div>
            <div className="helpCenter-SearchBar">
              <img src={SvgPath.searchIcon} alt="search" />
              <input type="search" placeholder="Search" />
            </div>
          </div>
          <div className="help-center-container">
            <div className="help-center-pages">
              <Link to={""}>orders</Link>
              <Link to={""}>billing</Link>
              <Link to={""}>Returns</Link>
              <Link to={""}>Careers</Link>
              <Link to={""}>Others</Link>
            </div>
            <img
              className="helpCenter-banner"
              src={require("../assets/images/helpCenter-banner.png")}
              alt="helpCenter-banner"
            />
            <div className="help-center-content">
              {helpCenterContent.map((item, index) => (
                <details
                  key={index}
                  className="filter-category"
                  open={openIndex === index}
                  onToggle={(e) => handleToggle(index, e.target.open)}
                >
                  <summary className="filter-summary">
                    <h3 className="filter-headings">{item.heading}</h3>
                    {openIndex === index ? (
                      <img src={SvgPath.upArrow} alt="upArrow" />
                    ) : (
                      <img src={SvgPath.downArrowperpal} alt="downArrow" />
                    )}
                  </summary>
                  <p className="help-center-para">{item.p}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <NewsLetter />
    </>
  );
}

export default HelpCenter;