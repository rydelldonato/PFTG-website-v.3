import React from "react";
import "./home.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade"
        // data-bs-ride="carousel"
        data-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="innerCarouselDiv innerCarouselDiv1 shadow-lg">
              <h3 className="h3">Discover the fusion of flavors:</h3>
              <h1 className="mb-4"> A journey through filipino cuisine</h1>
              <p className="carouselSmallText">A filipina owned business</p>
              <Link className="viewMenuButton" to="/menu">View menu</Link>
            </div>
            <img
              style={{ width: "100%" }}
              src="/allFood.jpeg"
              className="d-block"
              alt="foodBackground"
            />
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img
                id="tacos"
                src="sisigTacos.png"
                alt="sisigTacos"
              />
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
              className="d-block"
              alt="woodBackground"
            />
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img
                alt="sisigFries"
                style={{ width: 307, height: 240 }}
                src="sisigFries.jpeg"
              />
            </div>
            <div className="carousel-text carousel-heading">
              <h1>Sisig Fries</h1>
              <div className="carousel-text carousel-innerText">
                An irresistible and flavorful fusion dish that combines two
                classis comfort foods - fries and sisig.
              </div>
            </div>
            <img
              src="https://demo-storage.com/pm/html/vincent/img/slide_1.jpg"
              className="d-block"
              alt="woodBackground"
            />
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img
                alt="lumpia"
                style={{ width: 307, height: 240 }}
                src="lumpia.jpeg"
              />
            </div>
            <div className="carousel-text carousel-heading">
              <h1>Shanghai Lumpia</h1>
              <div className="carousel-text carousel-innerText">
                Succulent ground pork seasoned with aromatic spices and
                vegetables, wrapped in a thin and crispy wrapper, served with a
                sweet and tangy dipping sauce.
              </div>
            </div>
            <div className="bookViewButtons">
              <div style={{marginRight: 10}}>
              <button
                onClick={() => {
                  window.location.href =
                    "https://www.instagram.com/peachysfoodtogollc/?hl=en";
                }}
                type="button"
                className="btn btn-outline-light"
              >
                Contact now {">"}
              </button>
              </div>
              <div>
              <Link
                to="/menu"
                className="viewMenuButton"
              >
                View Menu {">"}
              </Link>
              </div>
            </div>
            <img
              src="https://demo-storage.com/pm/html/vincent/img/slide_1.jpg"
              className="d-block"
              alt="woodBackground"
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
            <img alt="qualityFoods" src="quality-food-logo.png" />
            <h3>Quality Foods</h3>
            <p className="shadow-lg p-3 mb-5 bg-body rounded opacity-75">
              Whether you're in the mood for a light snack or a hearty meal,
              browse through dishes that fuse the rich, bold flavors of Mexican
              cuisine with the sweet, tangy, and savory flavors of traditional
              Filipino dishes.{" "}
            </p>
          </div>
          <div className="p-2">
            <img alt="deliveryLogo" src="delivery-logo.png" />
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
            <img alt="tacosLogo" src="tacos-logo.png" />
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
            <img alt="tacos" src="/tacos.png" />
            <h5>Sisig Tacos</h5>
            <p className="popularItemsInfo">
              A fusion of spicy Filipino pork/chicken and Mexican tacos, served
              on a tortilla with toppings like onion and cilantro.
            </p>
            <p className="price">$ 12.99</p>
          </div>
          <div className="p-2">
            <img alt="sisigOverRice" src="/over-rice.png" />
            <h5>Sisig Over Rice</h5>
            <p className="popularItemsInfo">
              Spicy, crispy diced or shredded pork/chicken, mixed with spices,
              onion, and vinegar, served over steaming hot rice.
            </p>
            <p className="price">$ 13.99</p>
          </div>
          <div className="p-2">
            <img alt="sisigBao" src="/bao.png" />
            <h5>Sisig Bao</h5>
            <p className="popularItemsInfo">
              The flavors of Filipino sisig with the soft and fluffy steamed bao
              buns of Chinese cuisine.
            </p>
            <p className="price">$ 11.49</p>
          </div>
          <div className="p-2">
            <img alt="sisigBanhMi" src="/banhmi.jpeg" />
            <h5>Tocino Banh Mi</h5>
            <p className="popularItemsInfo">
              Chicken Tocino in a French-Vietnamese hybrid consisting of an airy
              baguette with pickled veggies, cilantro drizzled with banana
              ketchup aioli.
            </p>
            <p className="price">$ 10.75</p>
          </div>
        </div>
      </div>
      <div id="aboutPFTGDiv">
        <div className="aboutPFTGDiv">
          <div className="d-flex flex-row aboutPFTGDivInnerDiv">
            <div className="aboutPFTGDivLeft p-2">
              <h1>we are peachy's food to-go</h1>
              <h6>
                We believe that food is a celebration of culture, and it is our
                goal to share our love for Filipino cuisine with each and every
                one of our customers.
              </h6>
              <img alt="line" src="separator.png" />
              <p>
                At Peachy's food to go, we are dedicated to bringing the
                authentic flavors and culinary traditions of the Philippines to
                your plate.
              </p>
              <p>
                Our purpose is to preserve and promote the rich culinary
                heritage of the Philippines through authentic, delicious, and
                accessible food experiences. We are committed to continuously
                exploring new ways to showcase the rich and diverse flavors of
                the Philippines.
              </p>
            </div>
            <div className="aboutPFTGDivRight p-2">
              <p>
                "The Sisig fries were so delicious! The special sauce that is
                added on top had such a unique taste and the flavors of the dish
                were so yummy. very great food..definitely recommend!!!!"
              </p>
              <div className="d-flex reviewDiv">
                <img alt="doordash review" class="review" src="feReview.png" />
                Fe D<br></br>Doordash Review
              </div>
              <p>
                "The food here is amazing! I have never had any Filipino Fusion
                food as good as this! Highly Recommend!!"
              </p>
              <div className="d-flex reviewDiv">
                <img
                  alt="doordashReview"
                  className="review"
                  src="adrizzyReview.png"
                />
                Adrizzy P<br></br>Doorash Review
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="igFeed">
        <h1>Follow us on our Instagram</h1>
        <img alt="zigzag line" id="zigzag" src="zigZag.png" />
        <h6>
          <a href="https://www.instagram.com/peachysfoodtogollc/">
            <img src="3d-ig-logo.png" alt="igLogo" />
            Peachy's Food To Go
          </a>
        </h6>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
