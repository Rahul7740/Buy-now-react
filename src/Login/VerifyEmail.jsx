import React from "react";
import "../style/loginRegister.css";

function VerifyEmail() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="loginRegister-container">
          <div className="loginRegister-form-container"></div>
          <div className="loginRegister-imgs">
            <img
              src={require(`../assets/images/login-img.png`)}
              alt="register"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerifyEmail;
