import React, { useState } from "react";
import { RiPhoneFill } from "react-icons/ri";
import "./Header.css";

function Header() {
  const [head, setHead] = useState();

  return (
    <>
      <header className={`${head ? "whiteHeader" : null}`}>
        <div className="container">
          <div className="header-flex">
            <a className="nav_logo_link" href="#">
              Woman&Sports LLC
            </a>
            <nav>
              <a className="nav_link" href="#">
                Home
              </a>
              <a className="nav_link" href="#">
                Production
              </a>
              <a className="nav_link" href="#">
                Blog
              </a>
              <a className="nav_link" href="#">
                Contact
              </a>
            </nav>
            <a className="nav_phoneNum_link" href="tel:+998971998846">
              <RiPhoneFill className="nav_call_icon" />
              +998 97 199 88 46
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
