import React from "react";
import "./mainpage.css";
import Page from "./Page";

const MainPage = () => {
  return (
    <div>
      <div className="img">
        <div className="main-page">
          <h1>Qui Sommes-nous ?</h1>
          <h3>
            {" "}
            CEVV technical services est un véritable intégrateur et pas un
            fabricant de borne
          </h3>
          <p>
            Nous sélectionnons les bornes les mieux adaptées à vos besoins parmi
            une large gamme de partenaires.
            <br />
            <span>
              Pour un usage particulier ou professionnel, nous vous garantissons
              des solutions flexibles et performantes
            </span>
          </p>
          <button className="BTN"> DEMANDER UNE OFFRE</button>
        </div>
      </div>
      <Page />
    </div>
  );
};

export default MainPage;
