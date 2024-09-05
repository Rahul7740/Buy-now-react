import React, { Fragment, useState } from "react";
import "../style/productFilter.css";
import "../style/topDeal.css";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import colosArray from "../json/filter-color.json";
import topDealProducts from "../json/top-deal-products.json";
import RelatedItemYourSearch from "../snippets/RelatedItemYourSearch";
import ProductCard from "../snippets/TopDealProductCard";
import AllButtons from "../snippets/AllButtons";
import NewsLetter from "../home/NewsLetter";
import productCategorys from "../json/products-categorys.json";

function TopDeals() {
  function heidhgn(e) {
    let sibling = e.nextElementSibling.style
    console.log(sibling);
    
    // if(sibling){

    // }
  }

  const [arrow, setArrow] = useState(false);
  function arrowRotate() {
    setArrow(arrow === false ? true : false);
  }
  const [filter, setFilter] = useState(false);
  const [categorys, setCategorys] = useState(8);
  function categorysQuantity() {
    setCategorys(categorys === 8 ? 11 : 8);
  }
  const [colors, setColor] = useState(12);
  function colorQuantity() {
    setColor(colors === 12 ? 24 : 12);
  }

  const [value, setValue] = useState(20);
  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div
        onClick={() => {
          setFilter(false);
        }}
        className={`filter-background-overlay ${
          filter === true ? "showFIlter" : ""
        }`}
      ></div>

      <section className="all-sections">
        <div className="container">
          <div className="sections-header">
            <h2>Top deals</h2>
            <div className="pages-directions-div">
              <Link to={"/"}>Home</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link style={{ color: "#1F292D" }} to={"/topDeals"}>
                Top Deals
              </Link>
            </div>
          </div>
          <div className="filter_and_viewAll-container">
            <div
              className={`filter-container ${
                filter === true ? "showFIlter" : ""
              }`}
            >
              <div className="filter-head">
                <h2>Filter</h2>
                <button className="display-block-none-1100">CLEAR ALL</button>
                <button
                  onClick={() => {
                    setFilter(false);
                  }}
                  className={`display-none-block-1100 }`}
                >
                  <img src={SvgPath.closeBtn} alt="CLOSE" />
                </button>
              </div>
              <div className="top-deal-caterogy" open>
                <div
                  onClick={(e) => {
                    arrowRotate();
                    heidhgn(e);
                  }}
                  className="top-deal-caterogy-content"
                >
                  <h3 className="filter-headings">Top Deals</h3>
                  <img
                    style={{
                      transform: arrow === false ? "rotate(180deg)" : "",
                    }}
                    className="down-svg"
                    src={SvgPath.upArrow}
                    alt="upArrow"
                  />
                </div>
                <div
                  className={`topDeal-category-div ${
                    arrow === true ? "heidfdf" : ""
                  }`}
                >
                  <button>All Deals</button>
                  <button>Today Deals</button>
                  <button>Upcoming Deals</button>
                  <button>Available Products Only</button>
                </div>
              </div>
              <details className="filter-category" open>
                <summary className="filter-summary">
                  <h3 className="filter-headings">Category</h3>
                  <img
                    className="down-svg"
                    src={SvgPath.upArrow}
                    alt="upArrow"
                  />
                </summary>
                <div className="filter-category-div">
                  {productCategorys.slice(0, categorys).map((item, index) => (
                    <button key={index}>{item.name}</button>
                  ))}
                </div>
                <button
                  onClick={categorysQuantity}
                  className="filter-viewALl-btn"
                >
                  {categorys === 8 ? "View all" : "Show Less"}
                </button>
              </details>
              <details className="filter-category" open>
                <summary className="filter-summary">
                  <h3 className="filter-headings">Price</h3>
                  <img
                    className="down-svg"
                    src={SvgPath.upArrow}
                    alt="upArrow"
                  />
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
                  <div
                    className="tooltip"
                    style={{ left: `calc(${(value - 50) / 4.9}% - 10px)` }}
                  >
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
                  <img
                    className="down-svg"
                    src={SvgPath.upArrow}
                    alt="upArrow"
                  />
                </summary>
                <div className="category-div">
                  <form className="filter-form">
                    {colosArray.slice(0, colors).map((i, index) => (
                      <Fragment key={index}>
                        <input
                          className="filter-color-input"
                          id={i.id}
                          type="radio"
                          name="asdf"
                        />
                        <label className="filter-color-label" htmlFor={i.id}>
                          <div
                            style={{ background: i.color }}
                            className="colors color1"
                          ></div>
                        </label>
                      </Fragment>
                    ))}
                  </form>
                  <button
                    onClick={colorQuantity}
                    className="filter-viewALl-btn"
                  >
                    {colors === 12 ? "+12 more" : "Show Less"}
                  </button>
                </div>
              </details>
              <details className="filter-category" open>
                <summary className="filter-summary">
                  <h3 className="filter-headings">Brands</h3>
                  <img
                    className="down-svg"
                    src={SvgPath.upArrow}
                    alt="upArrow"
                  />
                </summary>
              </details>
              <details className="filter-category" open>
                <summary className="filter-summary">
                  <h3 className="filter-headings">Customer review</h3>
                  <img
                    className="down-svg"
                    src={SvgPath.upArrow}
                    alt="upArrow"
                  />
                </summary>
              </details>
              <details className="filter-category" open>
                <summary className="filter-summary">
                  <h3 className="filter-headings">Discount</h3>
                  <img
                    className="down-svg"
                    src={SvgPath.upArrow}
                    alt="upArrow"
                  />
                </summary>
              </details>
            </div>
            <div className="products-view-all-contianer">
              <h3 className="top-deals-products-heading">All deals</h3>
              <div className="products-view-all-head">
                <p>Showing 1–9 of 200 results</p>
                <div className="filter-btns-container">
                  <button
                    onClick={() => {
                      setFilter(true);
                    }}
                    className="filter-btn"
                  >
                    FILTER{" "}
                    <img src={SvgPath.downArrowperpal} alt="down-arrow" />
                  </button>
                  <button className="sortBy-btn">
                    SORT BY{" "}
                    <img src={SvgPath.downArrowperpal} alt="down-arrow" />
                  </button>
                </div>
              </div>
              <div className="topDeal-top-Products-container">
                <div className="topDeal-top-Products-1">
                  <div>
                    <h3>
                      Jabra (Wireless Headsets){" "}
                      <span style={{ color: "#422659", fontWeight: "400" }}>
                        20% off
                      </span>
                    </h3>
                    <p>$ 600.00</p>
                    <AllButtons name="BUY NOW" class="top-deal-but-btn" />
                  </div>
                  <img
                    src={require("../assets/images/topDeal-img-1.png")}
                    alt="top"
                  />
                </div>
                <div className=" topProduct-2 topDeal-top-Products-1">
                  <div>
                    <h5>20% off</h5>
                    <h6>$ 600.00</h6>
                    <p>Jabra (Wireless Headsets)</p>
                  </div>
                  <img
                    src={require("../assets/images/topDeal-img-2.png")}
                    alt="top"
                  />
                </div>
              </div>
              <div className="view-all-products-grid">
                {topDealProducts.map((i, index) => (
                  <Fragment key={index}>
                    <ProductCard
                      img={i.img}
                      name={i.name}
                      price={i.price}
                      discount={i.discount}
                    />
                  </Fragment>
                ))}
              </div>
              <div className="products-pages-controler">
                <button>
                  <img src={SvgPath.leftVictor} alt="back" />
                </button>
                <button className="page-select">1</button>
                <button>2</button>
                <img src={SvgPath.threeDOts} alt="dots" />
                <button>10</button>
                <button>
                  <img src={SvgPath.rightVictor} alt="next" />
                </button>
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

export default TopDeals;
