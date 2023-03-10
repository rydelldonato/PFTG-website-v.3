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
        <hr />
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
              <img src="over-rice.png" />
              <h5>Sisig Over Rice</h5>
              <p>
                Garlic rice topped with pork or chicken sautéed in onions,
                garlic, vinegar, and soy sauce (sisig). Topped with cabbage,
                garlic chips, sriracha, jalapeños, and special house made
                cilantro base sauce Sunny side up egg extra $2.
              </p>
              <p>$ 14.99</p>
            </div>
            <div className="p-2">
              <img src="lumpia.png" />
              <h5>Sisig Fries (10 pcs)</h5>
              <p>Ground pork with onions, garlic, cilantro and seasonings.</p>
              <p>$ 9.99</p>
            </div>
            <div className="p-2">
              <img src="tacos.png" />
              <h5>Crispy Sisig Street Tacos (3 pcs)</h5>
              <p>
                Crispy deep fried street tacos corn tortillas with pork or
                chicken sautéed in onions, garlic, vinegar, and soy sauce
                (sisig). Topped with cabbage, garlic chips, sriracha, jalapeño,
                and special house made cilantro base sauce.
              </p>
              <p>$ 14.99</p>
            </div>
            <div className="p-2">
              <img src="locomoco.png" />
              <h5>Loco Moco Lumpia (2 pcs)</h5>
              <p>
                Hamburger meat and rice wrapped in spring roll wrapper topped
                with sunny side up egg, gravy and furikake. An onolicious meal!
              </p>
              <p>$ 11.99</p>
            </div>
            <div className="p-2">
              <img src="bao.png" />
              <h5>Sisig Bao (2 pcs)</h5>
              <p>
                Steamed sweet dough bun stuffed with sisig (pork or chicken
                sautéed in onions, garlic, vinegar, and soy sauce) with special
                house made cilantro base sauce.
              </p>
              <p>$ 11.99</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
