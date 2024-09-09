import React from "react";
import "../style/myAccount.css";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import myAccountJson from "../json/my-accout-data.json"

function MyAccount() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="sections-header">
          <h2>Top deals</h2>
          <div className="pages-directions-div">
            <Link to={"/"}>Home</Link>
            <img src={SvgPath.arrowLIneRight} alt="forword" />
            <Link style={{ color: "#1F292D" }} to={"/myAccount"}>{}
            My Accounts
            </Link>
          </div>
        </div>
        <div className="myAccount-main-container">
            {myAccountJson.map((item,index)=>(
                <div className="my-account-sections">
                    <div className="my-account-contents">
                        <img src={require(`../assets/images/${item.img}`)} alt="my-myAccount" />
                        <div>
                          <h3>{item.name}</h3>
                          <p>{item.p}</p>
                        </div>
                    </div>
                    <img src={require(`../assets/svg/right-victor-lite-perpul.svg`).default} alt="right-arrow" />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
