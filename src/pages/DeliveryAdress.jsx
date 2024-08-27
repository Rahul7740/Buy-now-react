import React, { useState } from "react";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/deliveryAddress.css";
import Summary from "../snippets/Summary";
import selects from "../json/deliveryAdress-selects.json"
import saveAdresss from "../json/saveAdress.json"

function DeliveryAdress() {
    const [Address, setAddress] = useState(false)
    const [show, setshow] = useState(false)
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
                        <div className="deliveryAddress-container">
                            <h3>Delivery Address</h3>
                            <div style={{ display: Address === false ? "none" : "flex" }} className="save-adress-container">
                                {saveAdresss.map((i, index) => (
                                    <div key={index} className="save-adress">
                                        <div>
                                            <div className="save-adress-heading">
                                                <h3>{i.name}</h3>
                                                <span>{i.place}</span>
                                            </div>
                                            <p>{i.adress}</p>
                                        </div>
                                        <Link to={"/orderSummary"}>
                                            <button>Select address</button>
                                        </Link>
                                    </div>
                                ))}
                                <button style={{ display: show === true ? "none" : "block" }} onClick={() => { setshow(true) }} className="saveAddress-btn" type="submit">Add new address</button>
                            </div>
                            <div style={{ display: show === false && Address === true ? "none" : "flex" }} className="deliveryAddress-container">
                                <h3 style={{ display: show === true ? "block" : "none" }}>New Address</h3>

                                <div className="delivery-A-input-div rsponcv-delivery-inputs">
                                    <input className="delivery-a-inputs" placeholder="First Name" type="text" />
                                    <input className="delivery-a-inputs" placeholder="Mobile Number" type="tel" />
                                </div>
                                <div className="delivery-A-input-div rsponcv-delivery-inputs">
                                    <input className="delivery-a-inputs" placeholder="Email Address" type="text" />
                                    <input className="delivery-a-inputs" placeholder="PIN Code" type="number" />
                                </div>
                                <div className="delivery-A-input-div">
                                    {selects.map((i, index) => (
                                        <select key={index} name="selects"  >
                                            <option defaultValue="state">{i.head}</option>
                                            <option defaultValue="a">{i.option1}</option>
                                            <option defaultValue="b">{i.option2}</option>
                                            <option defaultValue="c">{i.option3}</option>
                                        </select>
                                    ))}
                                </div>
                                <input className="delivery-a-inputs" placeholder="Address 1" type="text" />
                                <input className="delivery-a-inputs" placeholder="Address 2" type="text" />
                                <div className="delivery-a-checkbox-div">
                                    <input id="checkss" type="checkbox" />
                                    <label htmlFor="checkss">
                                        <p>Business Address</p>
                                    </label>
                                </div>
                                <div className="space-between">
                                    <button onClick={() => { setAddress(true); setshow(false) }} className="saveAddress-btn" type="submit">Save Address</button>
                                    <button style={{ display: show === true ? "block" : "none" }} onClick={() => { setshow(false) }}>Cencel</button>
                                </div>
                            </div>
                        </div>
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
