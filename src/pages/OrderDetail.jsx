import React from "react";
import "../style/orderDetails.css";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";

function OrderDetail() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="sections-header">
          <h2>Order Details</h2>
          <div className="pages-directions-div">
            <Link to={"/"}>Home</Link>
            <img src={SvgPath.arrowLIneRight} alt="forword" />
            <Link style={{ color: "#1F292D" }} to={"/orderDetails"}>
              {}
              Order Details
            </Link>
          </div>
        </div>
        <div className="orderDetails-main-container">
          <div className="order-ID">
            <div>
              <h3>Order ID</h3>
              <p>021D0252G56404930</p>
              <button>
                <img
                  src={require(`../assets/svg/copy-text-icon.svg`).default}
                  alt="copyText"
                />
              </button>
            </div>
            <h4>
              View all orders
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z"
                  fill="white"
                />
              </svg>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderDetail;
