import React from "react";
import "../style/myOrders.css";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import myOrderJson from "../json/MyOrder-contents.json";

function MyOrders() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="sections-header">
          <h2>Top deals</h2>
          <div className="pages-directions-div">
            <Link to={"/"}>Home</Link>
            <img src={SvgPath.arrowLIneRight} alt="forword" />
            <Link style={{ color: "#1F292D" }} to={"/myOrders"}>
              {}
              MyOrders
            </Link>
          </div>
        </div>
        <div className="personal-Information-container">
          <h3>Personal information</h3>
          <div className="myOrder-main-container">
            <div className="myOrder-content-head">
              {myOrderJson["hedings"].map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            {myOrderJson["contents"].map((i, index) => (
              <div className="myOrder-contents">
                <h4>
                  <img
                    src={require(`../assets/svg/${i.img}`)}
                    alt="products-img"
                  />
                  {i.order}
                </h4>
                <p>{i.orderId}</p>
                <h4>{i.date}</h4>
                <p>{i.total}</p>
                <div>
                  <span className={`status-spans ${i.status}`}>{i.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyOrders;
