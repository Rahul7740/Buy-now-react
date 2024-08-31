import React, { Fragment, useState } from "react";
import "../style/productFilter.css";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import colosArray from "../json/filter-color.json";
import filterProducts from "../json/filterProducts.json"
import RelatedItemYourSearch from "../snippets/RelatedItemYourSearch";
import ProductCard from "../snippets/ProductCard";
import NewsLetter from "../home/NewsLetter";
function ProductsFilter() {
  const [filter, setFilter] = useState(false)

  const [value, setValue] = useState(20);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div onClick={() => { setFilter(false) }} className={`filter-background-overlay ${filter === true ? "showFIlter" : ""}`}></div>

      <section className="all-sections">
        <div className="container">
          <div className="sections-header">
            <h2>Apple watches</h2>
            <div className="pages-directions-div">
              <Link to={"/"}>Home</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link style={{ color: "#1F292D" }}  to={"/productsFilter"}>Products</Link>
            </div>
          </div>
          <div className="filter_and_viewAll-container">
            <div className={`filter-container ${filter === true ? "showFIlter" : ""}`}>
              <div className="filter-head">
                <h2>Filter</h2>
                <button className="display-block-none-1100">CLEAR ALL</button>
                <button onClick={() => { setFilter(false) }} className={`display-none-block-1100 }`}><img src={SvgPath.closeBtn} alt="CLOSE" /></button>
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
                  <input
                    type="range"
                    min="50"
                    max="500"
                    value={value}
                    className="slider"
                    onChange={handleSliderChange}
                  />
                  <div className="tooltip" style={{ left: `calc(${(value - 50) / 4.9}% - 10px)` }}>
                    {value}
                  </div>
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
                      <Fragment key={index}>
                        <input className="filter-color-input" id={i.id} type="radio" name="asdf" />
                        <label className="filter-color-label" htmlFor={i.id}>
                          <div style={{ background: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` }} className="colors color1"></div>
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
                <div className="filter-btns-container">
                  <button onClick={() => { setFilter(true) }} className="filter-btn">FILTER <img src={SvgPath.downArrowperpal} alt="down-arrow" /></button>
                  <button className="sortBy-btn">SORT BY <img src={SvgPath.downArrowperpal} alt="down-arrow" /></button>
                </div>

              </div>
              <div className="view-all-products-grid">
                {filterProducts.map((i, index) => (
                  <Fragment key={index}>
                    <ProductCard
                      img={i.img}
                      name={i.name}
                      price={i.price}
                      ratting={i.ratting}
                      new={i.new}
                    />
                  </Fragment>
                ))}
              </div>
              <div className="products-pages-controler">
                <button><img src={SvgPath.leftVictor} alt="back" /></button>
                <button className="page-select">1</button>
                <button>2</button>
                <img src={SvgPath.threeDOts} alt="dots" />
                <button>10</button>
                <button><img src={SvgPath.rightVictor} alt="next" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedItemYourSearch name="Related item your search" />

      <NewsLetter />
    </>
  );
}

export default ProductsFilter;
