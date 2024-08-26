import React from "react";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/deliveryAddress.css";
import Summary from "../snippets/Summary";

function DeliveryAdress() {
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
                            <div className="abcd">
                                <h4 className="stepper-label activeTxt">Delivery Address</h4>
                                <div className="stepper-dots activeDot"></div>
                            </div>
                            <div className="stepper-line"></div>
                            <div className="abcd">
                                <h4 className="stepper-label">Order Summary</h4>
                                <div className="stepper-dots"></div>
                            </div>
                            <div className="stepper-line"></div>
                            <div className="abcd">
                                <h4 className="stepper-label">Payment Option</h4>
                                <div className="stepper-dots"></div>
                            </div>
                            <div className="stepper-line"></div>
                            <div className="abcd">
                                <h4 className="stepper-label">Complete Order</h4>
                                <div className="stepper-dots"></div>
                            </div>
                        </div>
                    </div>
                    <div className="deliveryAdress-section">
                        <form className="deliveryAddress-container">
                            <h3>Delivery Address</h3>
                            <div className="delivery-A-input-div rsponcv-delivery-inputs">
                                <input className="delivery-a-inputs" placeholder="First Name" type="text" />
                                <input className="delivery-a-inputs" placeholder="Mobile Number" type="tel" />
                            </div>
                            <div className="delivery-A-input-div rsponcv-delivery-inputs">
                                <input className="delivery-a-inputs" placeholder="Email Address" type="text" />
                                <input className="delivery-a-inputs" placeholder="PIN Code" type="number" />
                            </div>
                            <div className="delivery-A-input-div">
                                <select name="" id="">
                                    <option value="state" selected disabled>City,State</option>
                                    <option value="a">a</option>
                                    <option value="b">b</option>
                                    <option value="c">c</option>
                                </select>
                                <select name="" id="" >
                                    <option value="country" selected disabled>Country</option>
                                    <option value="a">a</option>
                                    <option value="b">b</option>
                                    <option value="c">c</option>
                                </select>
                            </div>
                            <input className="delivery-a-inputs" placeholder="Address 1" type="text" />
                            <input className="delivery-a-inputs" placeholder="Address 2" type="text" />
                            <div className="delivery-a-checkbox-div">
                                <input type="checkbox" />
                                <p>Business Address</p>
                            </div>
                            <button className="saveAddress-btn" type="submit">Save Address</button>
                        </form>
                        <Summary />
                    </div>
                    <div className="deliveryAdress-improtantNotice">
                        <h3>Important Note</h3>
                        <p>Consectetur adipiscing elit. At praesent volutpat accumsan non adipiscing. Amet, sed in fames nec tincidunt. Neque vel urna facilisis vel nisl non. Lacinia scelerisque in nunc egestas et. Mauris duis sed pharetra, vulputate ut elit blandit donec. Tristique id a integer malesuada imperdiet tincidunt quis cras faucibus. Erat vitae auctor odio interdum magna non.</p>

                        <div>
                            <button>View Buynow Policy</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default DeliveryAdress
