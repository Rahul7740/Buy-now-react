import React, { Fragment } from "react";
import "../style/productFilter.css";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import colosArray from "../json/filter-color.json";
import FeaturedProducts from "../home/FeaturedProducts";

function ProductsFilter() {
  return (
    <>
      <section className="all-sections">
        <div className="container">
          <div className="sections-header">
            <h2>Apple watches</h2>
            <div className="pages-directions-div">
              <Link to={"/"}>Home</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link to={"/productsFilter"}>Products</Link>
            </div>
          </div>
          <div className="filter_and_viewAll-container">
            <div className="filter-container">
              <div className="filter-head">
                <h2>Filter</h2>
                <button>CLEAR ALL</button>
              </div>
              <details className="filter-category" open>
                <summary className="filter-summary">
                  <h3 className="filter-headings">Category</h3>
                  <img className="down-svg" src={SvgPath.upArrow} alt="upArrow" />
                </summary>
                <div className="filter-category-div">
                  <button>Watches</button>
                  <button>Mobiles</button>
                  <button>Laptops</button>
                  <button>Tablets</button>
                  <button>Headphones</button>
                  <button>Printers</button>
                  <button>Scanners</button>
                  <button>Speakers</button>
                </div>
                <button className="filter-viewALl-btn">View all</button>
              </details>
              <details className="filter-category" open>
                <summary className="filter-summary">
                  <h3 className="filter-headings">Price</h3>
                  <img className="down-svg" src={SvgPath.upArrow} alt="upArrow" />
                </summary>
                <div className="filter-price-range">
                  <input type="range" />
                </div>
                <div className="filter-low-high-prices">
                  <p>low: $50.00</p>
                  <p>High: $500.00</p>
                </div>
              </details>
              <details className="filter-category" open>
                <summary className="filter-summary">
                  <h3 className="filter-headings">Color</h3>
                  <img className="down-svg" src={SvgPath.upArrow} alt="upArrow" />
                </summary>
                <div className="category-div">
                  <form className="filter-form">
                    {colosArray.map((i, index) => (
                      <Fragment>
                        <input className="filter-color-input" id={i.id} type="radio" name="asdf"/>
                        <label className="filter-color-label" for={i.id}>
                          <div style={{background:`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`}} className="colors color1"></div>
                        </label>
                      </Fragment>
                    ))}
                  </form>
                  <button className="filter-viewALl-btn">+12 more</button>
                </div>
              </details>
              <details className="filter-category" open>
                <summary className="filter-summary">
                  <h3 className="filter-headings">Brands</h3>
                  <img className="down-svg" src={SvgPath.upArrow} alt="upArrow" />
                </summary>
              </details>
              <details className="filter-category" open>
                <summary className="filter-summary">
                  <h3 className="filter-headings">Customer review</h3>
                  <img className="down-svg" src={SvgPath.upArrow} alt="upArrow" />
                </summary>
              </details>
              <details className="filter-category" open>
                <summary className="filter-summary">
                  <h3 className="filter-headings">Discount</h3>
                  <img className="down-svg" src={SvgPath.upArrow} alt="upArrow" />
                </summary>
              </details>
            </div>
            <div className="products-view-all-contianer">
                  <div className="products-view-all-head">
                    <p>Showing 1–9 of 200 results</p>
                    <div>Sort by <img src={SvgPath.downArrowperpal} alt="down-arrow"  /></div>
                  </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturedProducts name="Related item your search" /> 
    </>
  );
}

export default ProductsFilter;
