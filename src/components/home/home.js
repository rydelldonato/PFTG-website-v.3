import React from 'react'
import './home.css'

export default function home() {
  return (
    <div>
        <section>
            <header>
            <div className="mainHeader">
                <div className="contactDiv">
                <div className="igLogo">
                    <img src="/ig.png" alt="igLogo" />
                </div>
                <div className="contactInfo">
                    Order online ||
                    <span
                    ><a
                        id="igLink"
                        href="https://www.instagram.com/peachysfoodtogollc/?hl=en"
                        >@peachysfoodtogollc</a
                    ></span
                    >
                    || Send me a DM on Instagram
                </div>
                </div>
                <div className="centerHeader">
                <div className="logoDiv">
                    <a href="index.html"
                    ><img
                        className="logoPic"
                        src="/headerLogo.png"
                        alt=""
                    /></a>
                </div>
                <nav className="headerNav">
                    <ul className="mainNav">
                    <li><a href="#">home</a></li>
                    <li><a href="#">menu</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                    </ul>
                </nav>
                </div>
                <div className="doordashDiv">
                <div className="innerDoordashDiv">
                    <img src="/5e8ce484664eae0004085467.png" alt=""/>
                </div>
                </div>
            </div>
        </header>
        </section>
        <section>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="innerCarouselDiv innerCarouselDiv1 shadow-lg">
                    <h3 className="h3">Discover the fusion of flavors:</h3>
                    <h1 className="mb-4"> A journey through filipino cuisine</h1>
                    <p className="carouselSmallText">A filipina owned business</p>
                    <button>View menu</button>
                    </div>
                    <img src="/allFood.jpeg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/tacos.jpeg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/lumpia.jpeg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </section>
    </div>
  )
}
