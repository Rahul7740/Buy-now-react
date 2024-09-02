import React from "react";
import SvgPath from "../assets/svg/SvgPath";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <>
      <Link to={"/productDetail"}>
        <div className="product-card">
          <div className="product-img">
            <img
              src={require(`../assets/images/${props.img}`)}
              alt="product-card"
            />
          </div>
          <div className="product-like-btn">
            {props.new ? <button className="new">New</button> : ""}
            <button><img src={SvgPath.productLikeBTN} alt="like" /></button>
          </div>
          <div className="product-content">
            <h3>{props.name}</h3>
            {props.ratting ? (
              <div className="ratting-div">
                <img src={SvgPath.star} alt="star" />
                <img src={SvgPath.star} alt="star" />
                <img src={SvgPath.star} alt="star" />
                <img src={SvgPath.star} alt="star" />
                <img src={SvgPath.helfStar} alt="half-star" />
              </div>
            ) : (
              ""
            )}

            <p>{props.price}</p>
            <button className="product-shop-btn">
              <span className="add-cart">ADD CART</span>
              <img
                className="cart-img"
                src={SvgPath.productShopBTN}
                alt="shop"
              />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}
export default ProductCard;