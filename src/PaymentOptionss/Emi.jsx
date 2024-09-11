import React, { useState } from "react";
import "../style/upi-payment.css";
import "../style/emi.css";
import emiMethodss from "../json/emiMethods.json";
import emiHeadings from "../json/emi-section-headings.json";
import emiPlans from "../json/emiPlans.json";
import contectUsSelect from "../json/contectUs-selector.json";

function Emi() {
  const [selectText, setSelectText] = useState("HDFC bank credit card");
  const [select, setSelect] = useState(false);
  function updateSelect() {
    setSelect(select === false ? true : false);
  }
  return (
    <div className="upiPayment-container">
      <div className="upiPayment-methods-div">
        {emiMethodss.map((i, index) => (
          <label className="upi-methods" key={index} htmlFor={index}>
            <div>
              <span className="checkbox">
                <input type="radio" name="upi" id={index} />
                <div></div>
              </span>
              <h3 className="all-para-16">{i.name}</h3>
            </div>
            <img src={require(`../assets/svg/${i.img}`)} alt="payment" />
          </label>
        ))}
      </div>
      <div className="otherCard-container">
        <h3 style={{ color: "#1F292D" }} className="all-para-16">
          No Cost EMI
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
      </div>
      <div className="emi-main-container">
        <h2 className="all-para-14">EMI Plan</h2>
        <div className="emi-contents-head">
          {emiHeadings.map((i, index) => (
            <div key={index}>
              <p className="all-para-14">{i.name}</p>
            </div>
          ))}
        </div>
        {emiPlans.map((i, index) => (
          <label htmlFor={i.id} key={index} className="emi-contents">
            <div>
              <span className="checkbox">
                <input type="radio" name="aa" id={i.id} />
                <div></div>
              </span>
              <p className="all-para-14">{i.price}</p>
            </div>
            <div>
              <p className="all-para-14">{i.interest}</p>
            </div>
            <div>
              <p className="all-para-14">{i.Cost}</p>
            </div>
            <div>
              {i.Status ? (
                <span className="emi-status emi-status-abailable">
                  Available
                </span>
              ) : (
                <span className="emi-status emi-status-NOabailable">
                  Not Available
                </span>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Emi;
