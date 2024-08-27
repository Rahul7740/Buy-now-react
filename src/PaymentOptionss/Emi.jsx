import React from 'react'
import "../style/upi-payment.css"
import "../style/emi.css"
import emiMethodss from "../json/emiMethods.json"
import emiHeadings from "../json/emi-section-headings.json"
import emiPlans from "../json/emiPlans.json"
import SvgPath from '../assets/svg/SvgPath'
function Emi() {
    return (
        <div className='upiPayment-container'>
            <div className='upiPayment-methods-div'>
                {emiMethodss.map((i, index) => (
                    <label className='upi-methods' key={index} htmlFor={index}>
                        <div>
                            <input type="radio" id={index} name='upi' />
                            <h3 className='all-para-16'>{i.name}</h3>
                        </div>
                        <img src={require(`../assets/svg/${i.img}`)} alt="payment" />
                    </label>
                ))}
            </div>
            <div className="otherCard-container">
                <h3 style={{ color: "#1F292D" }} className="all-para-16">No Cost EMI</h3>
                <select id='adupi' name="selects">
                    <option defaultValue="state">HDFC bank credit card</option>
                    <option defaultValue="a">a</option>
                    <option defaultValue="b">b</option>
                    <option defaultValue="c">c</option>
                </select>
            </div>
            <div className='emi-main-container'>
                <h2 className='all-para-14'>EMI Plan</h2>
                <div className='emi-contents-head'>
                    {emiHeadings.map((i, index) => (
                        <div key={index}>
                            <p className='all-para-14'>{i.name}</p>
                        </div>
                    ))}
                </div>
                {emiPlans.map((i, index) => (
                    <label htmlFor={i.id} key={index} className='emi-contents'>
                        <div>
                            <input type="radio" id={i.id} name='aa' />
                            <p className='all-para-14'>{i.price}</p>
                        </div>
                        <div>
                            <p className='all-para-14'>{i.interest}</p>
                        </div>
                        <div>
                            <p className='all-para-14'>{i.Cost}</p>
                        </div>
                        <div>
                            {
                                i.Status ? <span className='emi-status emi-status-abailable'>Available</span> : <span className='emi-status emi-status-NOabailable'>Not Available</span>
                            }
                        </div>
                    </label>
                ))}

            </div>
        </div>
    )
}

export default Emi