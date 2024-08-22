import React from 'react'
import { Link } from 'react-router-dom'
import SvgPath from '../assets/svg/SvgPath'
import '../style/contectUs.css'
import AllButtons from '../snippets/AllButtons'

function ContactUS() {
    return (
        <>
            <section className="all-sections">
                <div className="container">
                    <div className="sections-header">
                        <h2>Get In touch!</h2>
                        <div className="pages-directions-div">
                            <Link to={"/"}>Home</Link>
                            <img src={SvgPath.arrowLIneRight} alt="forword" />
                            <Link to={"/contectUS"}>Contact Us</Link>
                        </div>
                    </div>
                    <div className="contectUs-container">
                        <form className="contactUS-content">
                            <label>Contact Us</label>
                            <input type="text" placeholder='Name' />
                            <input type="text" placeholder='Email/Phone no.' />
                            <select>
                                <option value="select" disabled selected>Select an option...</option>
                                <option value="a">a</option>
                                <option value="b">b</option>
                                <option value="c">c</option>
                            </select>
                            <textarea name="" id="" cols="70" rows="4" placeholder='Comment'></textarea>
                            <div>
                                <input type="checkbox" id='check' />
                                <label htmlFor="check">By continuing, you agree to Buynow policy</label>
                            </div>
                            <AllButtons name="send message" />
                        </form>
                        <img src={require("../assets/images/contectUs-banner.png")} alt="contact us" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUS
