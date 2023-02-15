import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="d-flex flex-row justify-content-center footer">
      <div className="d-flex flex-column innerFooter ">
        <div className="p-2">
          <img className="footerLogo" src="headerLogo.png" />
        </div>
        <div className="p-2">
            <p>+1 209 684 8664. M-W 12 - 6pm, TH-F 12 - 2pm</p>
        </div>
        <div className="p-2">
        <nav className="footerNav">
              <ul className="footerNav">
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">menu</a>
                </li>
                <li>
                  <a href="#">services</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>
            </nav>
        </div>
      </div>
    </div>
  );
}
