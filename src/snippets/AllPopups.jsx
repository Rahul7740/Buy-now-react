import React from "react";
import "../style/all-popup.css";
import popupContects from "../json/topDeal-popup-contents.json"
import { usePopup } from "../contaxt/PopupContext";

function AllPopups() {
  const { popup, setPopup } = usePopup()
  return (
    <>
      <div className={`all-popus ${popup} ${popup === 225 ? "pages" : ""}`} onMouseOver={() => { setPopup(popup) }} onMouseLeave={() => { setPopup(11) }} style={{ opacity: typeof popup === "string" || popup === 225 ? "1" : "0", zIndex: typeof popup === "string" || popup === 225 ? "9999" : "-444" }}>
        <div className="all-popus-container">
          {
            popupContects[typeof popup === "string" ? popup : " "].map((item, index) => (
              <div key={index} className="all-popus-content">
                <div className="all-popus-content-headings">
                  <h3 style={{ color: "#1F292D" }}>{item.name}</h3>
                </div>
                {item.btnss.map((i, index) => (
                  <button key={index} className="all-popus-content-btns">
                    <h3>{i.btn}</h3>
                    <img
                      className="right-arrrow"
                      src={require(`../assets/svg/right-victor-perpul.svg`).default}
                      alt="go"
                    />
                  </button>
                ))}
              </div>
            ))
          }
        </div>
        {popup === 225 ?
          <>
            <div className="pages-popup-container">
              <div className="pages-popup-contents">
                {
                  popupContects["pages"].slice(0,2).map((item, index) => (
                    <div key={index} className="all-popus-content">
                      <div className="all-popus-content-headings">
                        <h3 style={{ color: "#1F292D" }}>{item.name}</h3>
                      </div>
                      {item.btnss.map((i, index) => (
                        <button key={index} className="all-popus-content-btns">
                          <h3>{i.btn}</h3>
                          <img
                            className="right-arrrow"
                            src={require(`../assets/svg/right-victor-perpul.svg`).default}
                            alt="go"
                          />
                        </button>
                      ))}
                    </div>
                  ))
                }
              </div>
              <div className="pages-popup-contents pagesPopup-contents-2">
                {
                  popupContects["pages"].slice(2,5).map((item, index) => (
                    <div key={index} className="all-popus-content">
                      <div className="all-popus-content-headings">
                        <h3 style={{ color: "#1F292D" }}>{item.name}</h3>
                      </div>
                      {item.btnss.map((i, index) => (
                        <button key={index} className="all-popus-content-btns">
                          <h3>{i.btn}</h3>
                          <img
                            className="right-arrrow"
                            src={require(`../assets/svg/right-victor-perpul.svg`).default}
                            alt="go"
                          />
                        </button>
                      ))}
                    </div>
                  ))
                }
              </div>
            </div>
          </>
          : ""}
      </div>
    </>
  );
}

export default AllPopups;
