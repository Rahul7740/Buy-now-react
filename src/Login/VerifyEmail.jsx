import React from "react";
import "../style/loginRegister.css";
import { Link } from "react-router-dom";
import AllButtons from "../snippets/AllButtons";

function VerifyEmail() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="verifyEmail-container">
          <div className="verifyEmail-contents">
            <div>
              <h3 className=" ">Please Check Your Email!</h3>
              <h6 className="bg-black text-cyan-300 sm:bg-red-700 sm:text-[12px] md:text-[15px] lg:text-[24px] xl:bg-green-800 xl:text-[30px] 2xl:text-[40px]">
                Please Check Your Email
              </h6>
              <p>
                Please check your email, 6-digit confirmation code to
                Tim.@example, please enter the confirmation code to verify your
                email.
              </p>
            </div>
            <div className="otp-Conform">
              <input type="tel" maxLength="1" placeholder="0" />
              <input type="tel" maxLength="1" placeholder="0" />
              <input type="tel" maxLength="1" placeholder="0" />
              <input type="tel" maxLength="1" placeholder="0" />
              <input type="tel" maxLength="1" placeholder="0" />
              <input type="tel" maxLength="1" placeholder="0" />
            </div>
            <div className="verfy-email-btns">
              <Link to={"/verifyEmail"}>
                <AllButtons
                  type="submit"
                  name="Verify"
                  class="loginRegisterBtn"
                />
              </Link>
              <div>
                <p>Don’t have a code? </p>
                <p style={{ color: "#422659" }} className="resendCOde">
                  Resend Code
                </p>
              </div>
            </div>
          </div>
          <div className="loginRegister-imgs">
            <img
              src={require(`../assets/images/emailVerify-img.png`)}
              alt="register"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerifyEmail;
