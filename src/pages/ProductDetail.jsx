import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/productDetail.css";
import ImgPath from "../assets/images/ImgPath";
import imagess from "../json/productDetailImgs.json";
import colors from "../json/prodcutDetail-colors.json";
import sizee from "../json/prodcutDetail-size.json";
import AllButtons from "../snippets/AllButtons";
import ProductInformation from "../productDetails/ProductInformation";
import ProductDetailss from "../productDetails/ProductDetailss";
import CustomerReviews from "../productDetails/CustomerReviews";
import FAQ from "../productDetails/FAQ";
import RelatedItemYourSearch from "../snippets/RelatedItemYourSearch";

function ProductDetail() {
  return (
    <>
      <section className="all-sections">
        <div className="container">
          <div className="sections-header">
            <h2>Help Center</h2>
            <div className="pages-directions-div">
              <Link to={"/"}>Home</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link to={"/productsFilter"}>Products</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link style={{ color: "#1F292D" }}  to={"/productDetail"}>Products details</Link>
            </div>
          </div>
          <div className="product-detail-container">
            <div className="product-detail-imgs display-block-none-700">
              <div className="prodcut-detail-main-img">
                <img
                  className="like-btn"
                  src={SvgPath.productDetailLikeBtn}
                  alt="like"
                />
                <img src={ImgPath.procutDetailMain} alt="product" />
                <div>
                  <img src={SvgPath.productDetailDelivery} alt="freeDelivery" />
                  <p>Free delivered</p>
                </div>
              </div>
              <div className="prodcut-detail-imgs-types">
                {imagess.map((i, index) => (
                  <div>
                    <img
                      src={require(`../assets/images/${i.img}`)}
                      alt="product"
                    />
                  </div>
                ))}
                <img src={SvgPath.rightVictor} alt="" />
              </div>
            </div>
            <div className="product-detail-content">
              <div className="product-detail-header">
                <div>
                  <h2>Apple Watch SE </h2>
                  <img src={SvgPath.exportIcon} alt="export" />
                </div>
                <p className="product-detail-para">
                  Price: $600.00 - Silver Aluminium Case with Abyss Blue Sport
                  Band - Regular
                </p>
              </div>
              <hr className="display-none-block-700" />
              <div className="product-detail-imgs display-none-block-700">
              <div className="prodcut-detail-main-img">
                <img
                  className="like-btn"
                  src={SvgPath.productDetailLikeBtn}
                  alt="like"
                />
                <img src={ImgPath.procutDetailMain} alt="product" />
                <div>
                  <img src={SvgPath.productDetailDelivery} alt="freeDelivery" />
                  <p>Free delivered</p>
                </div>
              </div>
              <div className="prodcut-detail-imgs-types">
                {imagess.map((i, index) => (
                  <div>
                    <img
                      src={require(`../assets/images/${i.img}`)}
                      alt="product"
                    />
                  </div>
                ))}
                <img src={SvgPath.rightVictor} alt="" />
              </div>
            </div>
              <hr />
              <div className="productDetail-divs">
                <p className="product-detail-para">Color</p>
                <form className="productDetail-colors">
                  {colors.map((i, index) => (
                    <Fragment key={index}>
                      <input
                        type="radio"
                        id={index}
                        name="colr"
                        defaultChecked
                      />
                      <label htmlFor={index}>
                        <div style={{ background: i.color }}></div>
                      </label>
                    </Fragment>
                  ))}
                </form>
              </div>
              <hr />
              <div className="productDetail-divs">
                <p className="product-detail-para">Size</p>
                <div className="productDetail-size">
                  {sizee.map((i, index) => (
                    <div key={index}>
                      <h3>{i.size}</h3>
                      <p>{i.p}</p>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="productDetail-divs">
                <p className="product-detail-para">Style name</p>
                <div className="productDetail-style">
                  <div>
                    <input type="radio" name="style" id="style1" defaultChecked />
                    <label htmlFor="style1">GPS</label>
                  </div>
                  <div>
                    <input type="radio" name="style" id="style2" />
                    <label htmlFor="style2">GPS + Cellular</label>
                  </div>
                </div>
              </div>
              <hr />
              <div className="productDetail-texes-div">
                <div>
                  <h3>$320.00</h3>
                  <p>Inclusive of all taxes</p>
                </div>
                <div className="texes-ratting-contaienr">
                  <p>4.5</p>
                  <div className="ratting-div">
                    <img src={SvgPath.star} alt="star" />
                    <img src={SvgPath.star} alt="star" />
                    <img src={SvgPath.star} alt="star" />
                    <img src={SvgPath.star} alt="star" />
                    <img src={SvgPath.helfStar} alt="half-star" />
                  </div>
                </div>
              </div>
              <div className="productDetail-readMore">
                <p>10-day replacement only</p>
                <Link style={{ color: "black" }}>Read more</Link>
              </div>
              <div className="productDetail-readMore">
                <AllButtons name="Add to cart" />
                <AllButtons name="Buy now" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductInformation />
      <ProductDetailss />
      <CustomerReviews />
      <FAQ />
      <RelatedItemYourSearch name="Related item your search" />
    </>
  );
}

export default ProductDetail;
