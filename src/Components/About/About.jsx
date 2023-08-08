import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="about_flex">
            <div className="about_img_box">
              <img
                className="about_picture"
                src="https://womeninsport.org/wp-content/uploads/2023/06/Football-tt-scaled-e1689930603788-800x800.jpg"
                alt="pic"
              />
            </div>
            <div className="about_desc_box">
              <h2 className="about_title">Our company</h2>
              <p className="about_paragraf">
                Sport has the potential to transform the lives of women and
                girls for the better, yet the opportunities are not always there
                for them. We need your help to create a future where everyone
                can benefit from sport.
              </p>
              <div className="btn_div">
                <button className="about_btn">More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
