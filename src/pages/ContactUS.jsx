import React, { useState } from "react";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/contectUs.css";
import AllButtons from "../snippets/AllButtons";
import contectUsSelect from "../json/contectUs-selector.json";

function ContactUS() {
  const [selectText, setSelectText] = useState("Select an option...");
  const [select, setSelect] = useState(false);
  function updateSelect() {
    setSelect(select === false ? true : false);
  }
  return (
    <>
      <section className="all-sections">
        <div className="container">
          <div className="sections-header">
            <h2>Get In touch!</h2>
            <div className="pages-directions-div">
              <Link to={"/"}>Home</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link style={{ color: "#1F292D" }} to={"/contectUS"}>
                Contact Us
              </Link>
            </div>
          </div>
          <div className="contectUs-container">
            <form className="contactUS-content">
              <label htmlFor="name">Contact Us</label>
              <input type="text" id="name" placeholder="Name" required />
              <input type="text" placeholder="Email/Phone no." required />
              <div className="select-container">
                <div
                  className="select"
                  onClick={updateSelect}
                  style={{ color:selectText==="Select an option..."? "#495F6A":"#1f292d" }}
                >
                  {selectText}
                  <img
                    style={{
                      transform:
                        select === true ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    src={
                      require(`../assets/svg/down-arrow-lite-purpal.svg`)
                        .default
                    }
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
                        setSelect(false)
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

              <textarea
                name=""
                id=""
                cols="70"
                rows="4"
                placeholder="Comment"
              ></textarea>
              <div className="content-us-policy">
                <input type="checkbox" id="check" />
                <label htmlFor="check">
                  By continuing, you agree to{" "}
                  <span style={{ color: "#67517A" }}>Buynow</span> policy
                </label>
              </div>
              <AllButtons name="send message" class="contect-submit-btn" />
            </form>
            <img
            className="contentUs-banner"
              src={require("../assets/images/contectUs-banner.png")}
              alt="contact us"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUS;
