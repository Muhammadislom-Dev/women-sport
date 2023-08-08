import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <h2>CONTACT US</h2>
          <div className="contact_flex">
            <div className="di"></div>
            <div className="form_div">
              <form>
                <input className="one" type="text" placeholder="Your name" />
                <input
                  className="two"
                  type="number"
                  placeholder="Phone number"
                />
                <button>Sending</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
