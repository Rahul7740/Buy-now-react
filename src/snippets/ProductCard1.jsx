import React from "react";
import SvgPath from "../assets/svg/SvgPath";
import { Link } from "react-router-dom";

function ProductCard1(props) {
  return (
    <>
      <Link to={"/productDetail"}>
        <div className="product-card1">
          <div className="product-card1-img">
            <img
              src={require(`../assets/images/${props.img}`)}
              alt="product-card"
            />
          </div>
          <button className="product-like-btn">
            {props.new ? <p className="new">New</p> : ""}
            <img src={SvgPath.productLikeBTN} alt="like" />
          </button>
          <div className="product-card1-content">
            <h3>{props.name}</h3>
            {props.ratting ? (
              <div className="product-card1-ratting-div">
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
            <button className="product-shop-btn prodcut-card-1-shotBtn">
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

export default ProductCard1;
