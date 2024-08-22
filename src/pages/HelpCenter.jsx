import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/helpCenter.css";
import SvgPath from "../assets/svg/SvgPath";
import NewsLetter from "../home/NewsLetter";
import helpCenterContent from "../json/helpCenterContents.json";

function HelpCenter() {
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
              {helpCenterContent.map((i, index) => (
                <details
                  key={index}
                  className="filter-category"
                  open={i.o ? "open" : ""}
                >
                  <summary className="filter-summary">
                    <h3 className="filter-headings">{i.heading}</h3>
                    <img src={SvgPath.upArrow} alt="upArrow" />
                  </summary>
                  <p className="help-center-para">{i.p}</p>
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
