import React, { useState } from "react";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import productss from "../json/cart-procuts.json";
import Summary from "../snippets/Summary";
import "../style/order-Summary.css"

function OrderSummary() {
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
                            <Link style={{ color: "#1F292D" }}  to={"/checkout"}>Checkout</Link>
                        </div>
                    </div>
                    <div className="stepper">
                        <div className="stepper-line-container">
                            <Link to={"/deliveryAdress"} className="abcd">
                                <h4 className="stepper-label activeTxt">Delivery Address</h4>
                                <div className="stepper-dots activeDot"></div>
                            </Link>
                            <div className="stepper-line activeline"></div>
                            <Link to={"/orderSummary"} className="abcd">
                                <h4 className="stepper-label activeTxt">Order Summary</h4>
                                <div className="stepper-dots activeDot"></div>
                            </Link>
                            <div className="stepper-line"></div>
                            <Link to={"/paymentOption"} className="abcd">
                                <h4 className="stepper-label">Payment Option</h4>
                                <div className="stepper-dots"></div>
                            </Link>
                            <div className="stepper-line"></div>
                            <div className="abcd">
                                <h4 className="stepper-label">Complete Order</h4>
                                <div className="stepper-dots"></div>
                            </div>
                        </div>
                    </div>
                    <div className="deliveryAdress-section">
                        <div className="deliveryAddress-container">
                            <h3>Order Summary</h3>
                            <div className="orderSummary-Main-container">
                                {productss.map((i, index) => (
                                        <div key={index} className="orderSummary-products">
                                            <div className="orderSummary-imgs">
                                                <img
                                                    src={require(`../assets/images/${i.img}`)}
                                                    alt="cart-img"
                                                />
                                            </div>
                                            <div className="cart-prdt-details">
                                                <div>
                                                    <h3>{i.name}</h3>
                                                    <p>{i.p}</p>
                                                </div>
                                                
                                                <div className="orderSummary-products-quantity-container">
                                                    <div className="orderSummary-products-quantity">
                                                        <button
                                                            onClick={() => {
                                                                setQuantity(quantity - 1);
                                                            }}
                                                        >
                                                            <img src={SvgPath.minus} alt="minus" />
                                                        </button>
                                                        <p style={{ display: "block" }}>{quantity}</p>

                                                        <button
                                                            onClick={() => {
                                                                setQuantity(quantity + 1);
                                                            }}
                                                        >
                                                            <img src={SvgPath.plus} alt="plus" />
                                                        </button>
                                                    </div>
                                                    <h4 className="">{i.price}</h4>
                                                    <button>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                ))}
                            </div>
                        </div>
                        <Summary />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderSummary
