import React from 'react';
import DoordashButton from "../doordashButton/doordashButton";
import "../home/home.css";
import ScrollButton from '../scrollButton/scrollButton';
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <>
    <DoordashButton/>
      <header>
      <ScrollButton />
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
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/menu">menu</Link>
                </li>
                <li>
                  <Link to="/services">services</Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
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
    </>
  )
}
