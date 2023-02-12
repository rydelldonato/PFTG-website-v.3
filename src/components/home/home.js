import React from "react";
import "./home.css";

export default function Home() {
  return (
    <>
      <header>
        <div className="mainHeader">
          <div className="contactDiv">
            <div className="igLogo">
              <img src="/ig.png" alt="igLogo" />
            </div>
            <div className="contactInfo">
              Order online ||
              <span>
                <a
                  id="igLink"
                  href="https://www.instagram.com/peachysfoodtogollc/?hl=en"
                >
                  @peachysfoodtogollc
                </a>
              </span>
              || Send me a DM on Instagram
            </div>
          </div>
          <div className="centerHeader">
            <div className="logoDiv">
              <a href="index.html">
                <img className="logoPic" src="/headerLogo.png" alt="" />
              </a>
            </div>
            <nav className="headerNav">
              <ul className="mainNav">
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
          <div className="doordashDiv">
            <div className="innerDoordashDiv">
              <img src="/5e8ce484664eae0004085467.png" alt="" />
            </div>
          </div>
        </div>
      </header>
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="innerCarouselDiv innerCarouselDiv1 shadow-lg">
              <h3 className="h3">Discover the fusion of flavors:</h3>
              <h1 className="mb-4"> A journey through filipino cuisine</h1>
              <p className="carouselSmallText">A filipina owned business</p>
              <button>View menu</button>
            </div>
            <img src="/allFood.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img id="tacos" src="tacos.png" />
            </div>
            <div className="carousel-text carousel-heading">
              <h1>Sisig Tacos</h1>
              <div className="carousel-text carousel-innerText">
                Blending together the bold flavors of Filipino cuisine with the
                classic form of Mexican tacos.
              </div>
            </div>
            <img
              src="https://demo-storage.com/pm/html/vincent/img/slide_1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <div
              id="carousel-slide-3"
              className="d-flex flex-row justify-content-between"
            >
              <div className="left-item p-2">
                <div className="left-item-innerText">
                  <h1>Sisig Fries</h1>
                  <p>
                    An irresistible and flavorful fusion dish that combines two
                    classis comfort foods - fries and sisig.
                  </p>
                </div>
                <div>
                  <p className="left-item-innerText2">
                    Crispy, golden brown fries with a generous portion of the
                    savory sisig mixture, sautéed with chopped onions,
                    jalapeños, and seasonings to create a bold and bold taste.
                  </p>
                </div>
                <div>
                  <button type="button" className="btn btn-outline-light">
                    Book now {">"}
                  </button>
                  <button type="button" className="btn btn-warning">
                    View Menu {">"}
                  </button>
                </div>
              </div>
              <div className="right-item p-2">
                <img src="fries.png" />
              </div>
            </div>
            <img
              src="https://demo-storage.com/pm/html/vincent/img/slide_1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <div
              id="carousel-slide-5"
              className="d-flex flex-row justify-content-between"
            >
              <div className="left-item p-2">
                <img src="lumpia.png" />
              </div>
              <div className="right-item p-2">
                <div className="right-item-innerText">
                  <h1>Shanghai Lumpia</h1>
                  <p>
                    A true testament to the fusion of Eastern and Western
                    flavors, married with the traditional flavors of Philippine
                    cuisine.
                  </p>
                </div>
                <div>
                  <p className="right-item-innerText2">
                    Succulent ground pork seasoned with aromatic spices and
                    vegetables, wrapped in a thin and crispy wrapper, served
                    with a sweet and tangy dipping sauce.
                  </p>
                </div>
                <div>
                  <button type="button" className="btn btn-outline-light">
                    Book now {">"}
                  </button>
                  <button type="button" className="btn btn-warning">
                    View Menu {">"}
                  </button>
                </div>
              </div>
            </div>
            <img
              src="https://demo-storage.com/pm/html/vincent/img/slide_1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div id="quickInfo">
        <div className="quickInfoDiv d-flex flex-row justify-content-center">
          <div className="p-2">
            <img src="quality-food-logo.png" />
            <h3>Quality Foods</h3>
            <p className="shadow-lg p-3 mb-5 bg-body rounded opacity-75">
              Whether you're in the mood for a light snack or a hearty meal,
              browse through dishes that fuse the rich, bold flavors of Mexican
              cuisine with the sweet, tangy, and savory flavors of traditional
              Filipino dishes.{" "}
            </p>
          </div>
          <div className="p-2">
            <img src="delivery-logo.png" />
            <h3>Fastest Delivery</h3>
            <p className="shadow-lg p-3 mb-5 bg-body rounded opacity-75">
              With its powerful technology and efficient delivery system,
              DoorDash is able to ensure that food is delivered quickly and
              accurately. The company also provides real-time updates on the
              status of the delivery, so customers can track their food as it
              makes its way to them.{" "}
            </p>
          </div>
          <div className="p-2">
            <img src="tacos-logo.png" />
            <h3>Original Recipes</h3>
            <p className="shadow-lg p-3 mb-5 bg-body rounded opacity-75">
              A Filipino-Mexican fusion small business offering a unique twist
              on traditional cuisine by combining the rich flavors and
              ingredients of both cultures.
            </p>
          </div>
        </div>
      </div>
      <div className="popularItemsDiv">
        <div id="popularItemsHeading">Popular Items</div>
        <div className="popularItemsInnerDiv d-flex flex-row justify-content-evenly">
          <div className="p-2">
            <img src="/tacos.png" />
            <h5>Sisig Tacos</h5>
            <p className="popularItemsInfo">
              A fusion of spicy Filipino pork/chicken and Mexican tacos, served
              on a tortilla with toppings like onion and cilantro.
            </p>
            <p className="price">$ 15.00</p>
          </div>
          <div className="p-2">
            <img src="/over-rice.png" />
            <h5>Sisig Over Rice</h5>
            <p className="popularItemsInfo">
            Spicy, crispy diced or shredded pork/chicken, mixed with spices, onion, and vinegar, served over steaming hot rice.
            </p>
            <p className="price">$ 15.00</p>
          </div>
          <div className="p-2">
            <img src="/bao.png" />
            <h5>Sisig Bao</h5>
            <p className="popularItemsInfo">
            The flavors of Filipino sisig with the soft and fluffy steamed bao buns of Chinese cuisine.
            </p>
            <p className="price">$ 15.00</p>
          </div>
          <div className="p-2">
            <img src="/locomoco.png" />
            <h5>Loco Moco Lumpia</h5>
            <p className="popularItemsInfo">
            Blends the classic Hawaiian Loco Moco, with the crispy and crunchy texture of traditional Filipino Lumpia, a delectable fried spring roll wrapper.
            </p>
            <p className="price">$ 15.00</p>
          </div>
        </div>
      </div>
      <div className="aboutPFTGDiv">
        <div className="d-flex flex-row aboutPFTGDivInnerDiv">
          <div className="aboutPFTGDivLeft">
            <h1>
              we are peachy's food to-go
            </h1>
            <h6>

            </h6>
            <img src="separator.png"/>
            <p>

            </p>
            <p>

            </p>
          </div>
          <div className="aboutPFTGDivRight">

          </div>
        </div>
      </div>
    </>
  );
}
