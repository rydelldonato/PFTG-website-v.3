import React from "react";
import Header from "../header/header";
import "./about.css";
import Footer from "../footer/footer";

export default function About() {
  return (
    <>
      <Header />
      <div className="aboutTopDiv">
        <div>
          <text className="aboutTopDivMainText">
            The Story Of
            <span
              className="aboutTopDivCompanyName"
            >
              Peachy's Food To Go
            </span>
          </text>
        </div>
      </div>
      <div className="aboutBottomHalf">
        <div className="aboutMiddleDiv centered-content">
          <div>
            <text>
              Maria “Peachy” Donato, Chef and Owner of Peachy's Food To Go, LLC
              has been cooking since she was a little girl in the Philippines,
              when she lived with her grandparents. She migrated to the U.S. at
              age 13, and from then on, became more passionate and interested in
              the food industry.{" "}
            </text>
          </div>
        </div>
        <div className="aboutBottomDiv ">
          <div className="centered-content">
            <video width="100%" height="auto" src="/ig-reel-bg.mp4"></video>
            <text className="centered-content">
              Her intrigue in creating food lead her to produce Filipino fusion
              cuisine—her imagination and cleverness were well put together to
              make sure it left an amazing flavor on your palate.
            </text>
            <br></br>
            <text className="centered-content">2023</text>
            <br></br>
            <text className="centered-content">
              Peachy has been a part of many pop-up events in the community,
              such as the inaugural Garlic Festival held in Stockton, wineries,
              food festivals, and school events. She also caters on the side.
            </text>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
