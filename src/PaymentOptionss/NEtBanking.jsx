import React, { useState } from "react";
import "../style/upi-payment.css";
import netBankingg from "../json/netBanking.json";
import SvgPath from "../assets/svg/SvgPath";
import contectUsSelect from "../json/contectUs-selector.json";

function NEtBanking() {
  const [selectText, setSelectText] = useState("Select an option...");
  const [select, setSelect] = useState(false);
  function updateSelect() {
    setSelect(select === false ? true : false);
  }
  return (
    <div className="upiPayment-container">
      <div className="upiPayment-methods-div">
        {netBankingg.map((i, index) => (
          <label className="upi-methods" key={index} htmlFor={index}>
            <div>
              <input type="radio" id={index} name="upi" />
              <h3 className="all-para-16">{i.name}</h3>
            </div>
            <img src={require(`../assets/svg/${i.img}`)} alt="payment" />
          </label>
        ))}
        <label htmlFor="adupi" className="add-upi">
          <img src={SvgPath.plus} alt="plus" />
          <p className="all-para-16">Add UPI</p>
        </label>
      </div>
      <div className="otherCard-container">
        <h3 style={{ color: "#1F292D" }} className="all-para-16">
          Other Banks
        </h3>
        <div className="select-container">
          <div
            className="select"
            onClick={updateSelect}
            style={{
              color:
                selectText === "Select an option..." ? "#495F6A" : "#1f292d",
            }}
          >
            {selectText}
            <img
              style={{
                transform: select === true ? "rotate(180deg)" : "rotate(0deg)",
              }}
              src={require(`../assets/svg/down-arrow-lite-purpal.svg`).default}
              alt="down-arrow"
            />
          </div>
          <div
            className={`select-content ${
              select === true ? "update-select-content" : ""
            }`}
          >
            {contectUsSelect.map((item, index) => (
              <button
                onClick={() => {
                  setSelectText(item.name);
                  setSelect(false);
                }}
                type="button"
                key={index}
                defaultValue={item.name}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="space-between save-card-btns-container">
          <button className="saveAddress-btn">Save Bank</button>
          <button className="cancel-btn">CANCEL</button>
        </div>
      </div>
    </div>
  );
}

export default NEtBanking;
