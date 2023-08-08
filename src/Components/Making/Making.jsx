import React from "react";
import Data from "../../assets/Data/making.json";
import "./Making.css";

export default function Making() {
  return (
    <>
      <div className="making">
        <div className="container">
          <h2 className="making_title">MANUFACTURING SHOPS</h2>
          <div className="making_flex">
            {Data.map((data) => {
              return (
                <div
                  className="card"
                  style={{ backgroundImage: `url(${data.img})` }}>
                  <h3 className="making_card_title">{data.title}</h3>
                  <button className="making_card_btn">More</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
