import React from "react";
import { Link, NavLink } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath"
import Summary from "../snippets/Summary";
import "../style/payment-Option.css"
import selectorss from "../json/paymentOption-selectrs.json"
import debitcards from "../json/paymentOption-cards.json"
function PaymentOption() {

    return (
        <>
            <section className="all-sections">
                <div className="container">
                    <div className="sections-header">
                        <h2>Cart Products</h2>
                        <div className="pages-directions-div">
                            <Link to={"/"}>Home</Link>
                            <img src={SvgPath.arrowLIneRight} alt="forword" />
                            <Link to={"/checkout"}>Checkout</Link>
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
                            <div className="stepper-line activeline"></div>
                            <Link className="abcd">
                                <h4 className="stepper-label activeTxt">Payment Option</h4>
                                <div className="stepper-dots activeDot"></div>
                            </Link>
                            <div className="stepper-line"></div>
                            <div className="abcd">
                                <h4 className="stepper-label">Complete Order</h4>
                                <div className="stepper-dots"></div>
                            </div>
                        </div>
                    </div>
                    <div className="paymentOption-selectrs-container">
                        <ul className="paymentOption-selectrs">
                            {selectorss.map((i, index) => (
                                <li key={index}>
                                    <NavLink className="all-para-14 selectrs-Links" activeclassname="active">{i.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                        <img src={SvgPath.debitCredit} alt="debit" />
                    </div>
                    <div className="payment-option-main-container">
                        <div className="payment-option-cards-container">
                            <div className="credit-Debit-card-div">
                                {debitcards.map((i, index) => (
                                    <label key={index} htmlFor={index} className="credit-Debit-card">
                                        <div className="credit-Debit-card-head">
                                            <div>
                                                <input type="radio" name="debit" id={index} />
                                                <p className="all-para-16">Shpping Card</p>
                                            </div>
                                            <img src={SvgPath.visa} alt="visa" />
                                        </div>
                                        <h6 className="credit-card-numbers">2356 2356 2356 2356</h6>
                                        <div className="credit-Debit-card-foot">
                                            <div>
                                                <p>Card Holder</p>
                                                <h3>{i.userName}</h3>
                                            </div>
                                            <div className="card-exp">
                                                <p>Exp</p>
                                                <h3>{i.exp}</h3>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                                <div className="add-more-cards">
                                    <img src={SvgPath.plus} alt="plus" />
                                    <p>Add Card</p>
                                </div>
                            </div>
                            <div className="otherCard-container">
                                <h3 style={{color:"#1F292D"}} className="all-para-16">Other Card</h3>
                                <div className="delivery-A-input-div rsponcv-delivery-inputs">
                                    <input className="delivery-a-inputs" placeholder="Card name" type="text" />
                                    <input className="delivery-a-inputs" placeholder="Card Number" type="tel" />
                                </div>
                                <div className="delivery-A-input-div rsponcv-delivery-inputs">
                                    <input className="delivery-a-inputs" placeholder="CVV" type="text" />
                                    <input className="delivery-a-inputs" placeholder="Exp Date"  type="date" />
                                </div>
                                <hr style={{width:"100%"}} />
                                <div className="space-between">
                                    <button className="saveAddress-btn">Save card</button>
                                    <button>Cencel</button> 
                                </div>
                            </div>
                        </div>
                        <Summary />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PaymentOption
