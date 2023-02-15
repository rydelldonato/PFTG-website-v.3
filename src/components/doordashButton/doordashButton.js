import React from "react";
import { Link } from "react-router-dom";
import "./doordashButton.css";

export default function DoordashButton() {
  return (
    <>
      <Link
        to={`https://www.doordash.com/store/peachy's-food-to-go-llc-stockton-24686955/`}
      >
        <button id="doordash">
          Order Pickup & Delivery | M-W 12 - 6pm, TH-F 12 - 2pm
        </button>
      </Link>
    </>
  );
}
