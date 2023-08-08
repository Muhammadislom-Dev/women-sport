import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_flex">
            <div className="footer_left">
              <h3>
                O‘zbekiston Respublikasi, Samarqand viloyati, Payariq shahri,
                Chelak ko‘chasi
              </h3>
              <h3>Dushanbadan shanbagacha soat 8:00 dan 17:00 gacha</h3>
            </div>
            <div className="footer_center">
              <a className="num" href="tel:+998971998846">
                +998 97 199 88 46
              </a>
              <a className="num" href="mailto:ayollarvasport.2013@mail.ru">
                ayollarvasport.2013@mail.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
