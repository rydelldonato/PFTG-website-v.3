import React from 'react';
import Header from '../header/header';
import "./contact.css";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="mainContent">
        <iframe
          title="JotForm"
          id="jotformIFrame"
          allowTransparency="true"
          src="https://www.jotform.com/form/232938769263168"
          frameborder="0"
          style={{
            width: "100%",
            height: "500px",
            border: "none",
          }}
        ></iframe>
      </div>
    </>
  );
}
