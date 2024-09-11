import React from "react";
import debitcards from "../json/paymentOption-cards.json";
import SvgPath from "../assets/svg/SvgPath";

function CardsDebitCredit() {
  return (
    <div className="payment-option-cards-container">
      <div className="credit-Debit-card-div">
        {debitcards.map((i, index) => (
          <label key={index} htmlFor={index} className="credit-Debit-card">
            <div className="credit-Debit-card-head">
              <div>
                <span className="checkbox">
                  <input type="radio" name="debit" id={index} defaultChecked />
                  <div></div>
                </span>
                <p className="all-para-16">Shpping Card</p>
              </div>
              <img src={SvgPath.visa} alt="visa" />
            </div>
            <h6 className="credit-card-numbers">2356 2356 2356 2356</h6>
            <div
              className="credit-Debit-card-foot"
              style={{ background: i.background }}
            >
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
        <label htmlFor="abc" className="add-more-cards">
          <img src={SvgPath.plus} alt="plus" />
          <p>Add Card</p>
        </label>
      </div>
      <div className="otherCard-container">
        <h3 style={{ color: "#1F292D" }} className="all-para-16">
          Other Card
        </h3>
        <div className="delivery-A-input-div rsponcv-delivery-inputs">
          <input
            id="abc"
            className="delivery-a-inputs"
            placeholder="Card name"
            type="text"
          />
          <input
            className="delivery-a-inputs"
            placeholder="Card Number"
            type="tel"
          />
        </div>
        <div className="delivery-A-input-div rsponcv-delivery-inputs">
          <input className="delivery-a-inputs" placeholder="CVV" type="text" />
          <input
            className="delivery-a-inputs"
            placeholder="Exp Date"
            type="date"
          />
        </div>
        <div className="space-between save-card-btns-container">
          <button className="saveAddress-btn">Save card</button>
          <button className="cancel-btn">CANCEL</button>
        </div>
      </div>
    </div>
  );
}

export default CardsDebitCredit;
