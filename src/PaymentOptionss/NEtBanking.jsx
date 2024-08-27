import React from 'react'
import "../style/upi-payment.css"
import netBankingg from "../json/netBanking.json"
import SvgPath from '../assets/svg/SvgPath'
function NEtBanking() {
    return (
        <div className='upiPayment-container'>
            <div className='upiPayment-methods-div'>
                {netBankingg.map((i, index) => (
                    <label className='upi-methods' key={index} htmlFor={index}>
                        <div>
                            <input type="radio" id={index} name='upi' />
                            <h3 className='all-para-16'>{i.name}</h3>
                        </div>
                        <img src={require(`../assets/svg/${i.img}`)} alt="payment" />
                    </label>
                ))}
                <label htmlFor='adupi' className='add-upi'>
                    <img src={SvgPath.plus} alt="plus" />
                    <p className='all-para-16'>Add UPI</p>
                </label>
            </div>
            <div className="otherCard-container">
                <h3 style={{ color: "#1F292D" }} className="all-para-16">Other Banks</h3>
                <select id='adupi'  name="selects">
                    <option defaultValue="state">Punjab</option>
                    <option defaultValue="a">a</option>
                    <option defaultValue="b">b</option>
                    <option defaultValue="c">c</option>
                </select>
                <hr style={{ width: "100%" }} />
                <div className="space-between">
                    <button className="saveAddress-btn">Save Bank</button>
                    <button>Cencel</button>
                </div>
            </div>
        </div>
    )
}

export default NEtBanking
