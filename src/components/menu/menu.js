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
              <p className="menuInfo">
                Shoestring fries topped with pork or chicken sautéed in onions,
                garlic, vinegar, and soy sauce (sisig). Topped with cabbage,
                garlic chips, sriracha, jalapeños, and special house made
                cilantro base sauce.
              </p>
              <p className="menuInfo">$ 11.50</p>
            </div>
            <div className="p-2">
              <img src="over-rice.png" />
              <h5>Sisig Over Rice</h5>
              <p className="menuInfo">
                Garlic rice topped with pork or chicken sautéed in onions,
                garlic, vinegar, and soy sauce (sisig). Topped with cabbage,
                garlic chips, sriracha, jalapeños, and special house made
                cilantro base sauce Sunny side up egg extra $2.
              </p>
              <p className="menuInfo">$ 13.99</p>
            </div>
            <div className="p-2">
              <img src="lumpia.png" />
              <h5>Sisig Fries (10 pcs)</h5>
              <p className="menuInfo">Ground pork with onions, garlic, cilantro and seasonings.</p>
              <p className="menuInfo">$ 8.99</p>
            </div>
            <div className="p-2">
              <img src="tacos.png" />
              <h5>Crispy Sisig Street Tacos (3 pcs)</h5>
              <p className="menuInfo">
                Crispy deep fried street tacos corn tortillas with pork or
                chicken sautéed in onions, garlic, vinegar, and soy sauce
                (sisig). Topped with cabbage, garlic chips, sriracha, jalapeño,
                and special house made cilantro base sauce.
              </p>
              <p className="menuInfo">$ 12.99</p>
            </div>
            <div className="p-2">
              <img src="banhmi.jpeg" />
              <h5>Tocino Banh Mi</h5>
              <p className="menuInfo">
                Chicken Tocino (Filipino sweet meat) in a French-Vietnamese
                hybrid consisting of an airy baguette with pickled veggies
                (cucumber, carrots, onions), cilantro drizzled with banana
                ketchup aioli.
              </p>
              <p className="menuInfo">$ 10.75</p>
            </div>
            <div className="p-2">
              <img src="bao.png" />
              <h5>Sisig Bao (2 pcs)</h5>
              <p className="menuInfo">
                Steamed sweet dough bun stuffed with sisig (pork or chicken
                sautéed in onions, garlic, vinegar, and soy sauce) with special
                house made cilantro base sauce.
              </p>
              <p className="menuInfo">$ 11.49</p>
              <button
                onClick={() => {
                  window.location.href =
                    "https://www.doordash.com/store/peachy's-food-to-go-llc-stockton-24686955/?event_type=autocomplete&pickup=false";
                }}
              >
                VIEW FULL MENU
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
