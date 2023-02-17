import React from "react";
import Header from "../header/header";
import "./menu.css";

export default function Menu() {
  return (
    <>
      <Header />
      <div className="discoverOurMenu">
        <div className="discoverOurMenuInnerDiv">
          <h1>discover our menu</h1>
        </div>
      </div>
      <div className="mainContent">
        <div id="deliveryProcess" className="d-flex flex-row">
          <div className="p-2">
            <img src="order-icon.png" />
            <h5>Order Online</h5>
            <p>The restaurant will prepare your meal right away.</p>
          </div>
          <div className="p-2">
            <img src="delivery-icon.png" />
            <h5>Track in realtime</h5>
            <p>A Dasher will pick up your order and bring it to you.</p>
          </div>
          <div className="p-2">
            <img src="delivered-icon.png" />
            <h5>Enjoy your meal</h5>
            <p>Your meal, delivered in around 45 minutes.</p>
          </div>
        </div>
        <div>
          <div id="menu" className="d-flex flex-row">
            <div className="p-2">
              <img src="fries.png" />
              <h5>Sisig Fries</h5>
              <p>
                Shoestring fries topped with pork or chicken sautéed in onions,
                garlic, vinegar, and soy sauce (sisig). Topped with cabbage,
                garlic chips, sriracha, jalapeños, and special house made
                cilantro base sauce.
              </p>
              <p>$ 12.99</p>
            </div>
            <div className="p-2">
              <img src="fries.png" />
              <h5>Sisig Fries</h5>
              <p>
                Shoestring fries topped with pork or chicken sautéed in onions,
                garlic, vinegar, and soy sauce (sisig). Topped with cabbage,
                garlic chips, sriracha, jalapeños, and special house made
                cilantro base sauce.
              </p>
              <p>$ 12.99</p>
            </div>
            <div className="p-2">
              <img src="fries.png" />
              <h5>Sisig Fries</h5>
              <p>
                Shoestring fries topped with pork or chicken sautéed in onions,
                garlic, vinegar, and soy sauce (sisig). Topped with cabbage,
                garlic chips, sriracha, jalapeños, and special house made
                cilantro base sauce.
              </p>
              <p>$ 12.99</p>
            </div>
            <div className="p-2">
              <img src="fries.png" />
              <h5>Sisig Fries</h5>
              <p>
                Shoestring fries topped with pork or chicken sautéed in onions,
                garlic, vinegar, and soy sauce (sisig). Topped with cabbage,
                garlic chips, sriracha, jalapeños, and special house made
                cilantro base sauce.
              </p>
              <p>$ 12.99</p>
            </div>
            <div className="p-2">
              <img src="fries.png" />
              <h5>Sisig Fries</h5>
              <p>
                Shoestring fries topped with pork or chicken sautéed in onions,
                garlic, vinegar, and soy sauce (sisig). Topped with cabbage,
                garlic chips, sriracha, jalapeños, and special house made
                cilantro base sauce.
              </p>
              <p>$ 12.99</p>
            </div>
            <div className="p-2">
              <img src="fries.png" />
              <h5>Sisig Fries</h5>
              <p>
                Shoestring fries topped with pork or chicken sautéed in onions,
                garlic, vinegar, and soy sauce (sisig). Topped with cabbage,
                garlic chips, sriracha, jalapeños, and special house made
                cilantro base sauce.
              </p>
              <p>$ 12.99</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
