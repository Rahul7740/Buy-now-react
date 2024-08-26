import React, { useState } from "react";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/cart.css";
import productss from "../json/cart-procuts.json";

function Cart() {
    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <section className="all-sections">
                <div className="container">
                    <div className="sections-header">
                        <h2>Cart Products</h2>
                        <div className="pages-directions-div">
                            <Link to={"/"}>Home</Link>
                            <img src={SvgPath.arrowLIneRight} alt="forword" />
                            <Link to={"/cart"}>Cart</Link>
                        </div>
                    </div>
                    <div className="cart-main-container">
                        {productss.map((i, index) => (
                            <div key={index} className="cart-Products">
                                <div className="cart-product-details-cont">
                                    <div className="cart-products-images">
                                        <img
                                            src={require(`../assets/images/${i.img}`)}
                                            alt="cart-img"
                                        />
                                    </div>
                                    <div className="cart-prdt-details">
                                        <div>
                                            <h3>{i.name}</h3>
                                            <p className="cart-paras">{i.p}</p>
                                        </div>
                                        <div className="cart-style-collections">
                                            <div>
                                                <h4>{i.size}</h4>
                                                <p>Size</p>
                                            </div>
                                            <img src={SvgPath.verticalLine20px} alt="vertical" />
                                            <div>
                                                <h4>GPS</h4>
                                                <p>Style</p>
                                            </div>
                                            <img src={SvgPath.verticalLine20px} alt="vertical" />
                                            <div>
                                                <span
                                                    style={{ background: i.color }}
                                                    id="color1"
                                                ></span>
                                                <label htmlFor="color1">
                                                    <p>Color</p>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="cart-products-quantity-cont">
                                            <div className="cart-products-quantity">
                                                <button
                                                    onClick={() => {
                                                        setQuantity(quantity - 1);
                                                    }}
                                                >
                                                    <img src={SvgPath.minus} alt="minus" />
                                                </button>
                                                <button>
                                                    <p>{quantity}</p>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setQuantity(quantity + 1);
                                                    }}
                                                >
                                                    <img src={SvgPath.plus} alt="plus" />
                                                </button>
                                            </div>
                                            <p>Free shipping</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-products-price">
                                    <h2>{i.price}</h2>
                                    <button>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-EMI-checkOut-container">
                        <div className="emi-container">
                            <div className="emi-header">
                                <h3>EMI Available</h3>
                                <p className="emi-para">No Cost EMI offers. Id aliquam felis a egestas mi diam erat eu habitasse. Please check EMI plans</p>
                                <button><p>Learn more</p></button>
                            </div>
                            <div className="emi-debit-Credit-container">
                                <div className="debit-credit">
                                    <button>Cradit card</button>
                                    <button className="debit-btn">debit card</button>
                                </div>
                                <img src={SvgPath.debitCredit} alt="debit card" />
                            </div>
                        </div>
                        <div className="check-Out-card">
                            <div className="check-Out-card-header">
                                <div className="space-between">
                                    <p style={{ color: "black" }}>Subtotal</p>
                                    <p>$320.00</p>
                                </div>
                                <div className="space-between">
                                    <p style={{ color: "black" }}>Item</p>
                                    <p>2</p>
                                </div>
                                <div className="space-between">
                                    <p style={{ color: "black" }}>Shipping</p>
                                    <p>Free</p>
                                </div>
                            </div>
                            <div className="space-between">
                                <p style={{ color: "black" }}>Total</p>
                                <h3>$530.00</h3>
                            </div>
                            <Link className="cart-checkOut-btn">Check out</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;
