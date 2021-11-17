import React from "react";
import "./navbar.css";
// import logo from "../../image/logo.jpg";

const Navbar = () => {
  return (
    <div>
      <div
        className="nav
    "
      >
        <div>
          <ul className="nav-ul">
            <li>CEVVT</li>
            <li>METHODOLOGIE</li>
            <li>NOS-SERVICES</li>
            <li>POUR QUI</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="nav-para">
          <p>
            Installer votre borne de
            <br /> recharge électrique ? <br /> Facile avec Nowa !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
