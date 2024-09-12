import React from "react";
import "../style/loginRegister.css";
import jsonData from "../json/LoginRegister-content.json";
import AllButtons from "../snippets/AllButtons";
import { Link } from "react-router-dom";

function Login() {
  // change password type function
  function changeType(e) {
    const sibling = e.currentTarget.previousElementSibling;
    if (sibling.type === "password") {
      sibling.type = "text";
    } else {
      sibling.type = "password";
    }
  }
  return (
    <section className="all-sections">
      <div className="container">
        <div className="loginRegister-container">
          <div className="loginRegister-form-container">
            <div className="loginRegister-btns">
              <Link className="active-btn-login">Log in </Link>
              <Link to={"/register"}>Register</Link>
            </div>
            {jsonData["login"].map((item, index) => (
              <form key={index} className="loginRegister-Form loginForm">
                <h3>{item.heading}</h3>
                {item.inputs.map((i, index) => (
                  <div key={index} className="delivery-a-inputs">
                    <input type={i.type} placeholder={i.name} required />
                    {i.eye && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="eye"
                        onClick={(e) => {
                          changeType(e);
                        }}
                      >
                        <path
                          d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z"
                          fill="#574B9B"
                          fillOpacity="0.54"
                        />
                      </svg>
                    )}
                  </div>
                ))}
                <div className="loginRegister-policy-forget">
                  <div>
                    <span className="checkbox">
                      <input
                        type="checkbox"
                        name="policy"
                        id="policy1"
                        required
                      />
                      <div></div>
                    </span>
                    <label htmlFor="policy1">
                      By continuing, you agree to <span>Buynow</span> policy
                    </label>
                  </div>
                </div>
                <AllButtons
                  type="submit"
                  name={item.btnName}
                  class="loginRegisterBtn"
                />
              </form>
            ))}
            <div className="loginRegister-other-accout-btns-container">
              <div className="or">
                <span></span>
                or
                <span></span>
              </div>
              <div className="loginRegister-other-accout-btns">
                <button>
                  <img
                    src={require(`../assets/svg/Goggle-icon.svg`).default}
                    alt="google"
                  />
                  <p>google</p>
                </button>
                <button>
                  <img
                    src={require(`../assets/svg/facebook-icon.svg`).default}
                    alt="facebook"
                  />
                  <p>facebook</p>
                </button>
              </div>
              <div className="bestExperience">
                <p>Log in or Register For Best Experience</p>
                <img
                  src={require(`../assets/svg/LoginOutlined.svg`).default}
                  alt="login"
                />
              </div>
            </div>
          </div>
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

export default Login;
