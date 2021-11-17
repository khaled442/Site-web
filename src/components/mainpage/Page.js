import React from "react";
import "./page.css";

const Page = () => {
  return (
    <div className="page">
      <div className="title">
        <h1>Pourqui nous ?</h1>
        <h3>TRAVAILER AVEC CEVVT</h3>
      </div>
      <div className="title-logo">
        <ul>
          <li>
            <img
              src="https://www.nicepng.com/png/detail/399-3992616_logo-recherche.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </li>

          <li>
            <img
              src="https://media.istockphoto.com/vectors/repair-tools-icon-tools-for-reparing-logo-flat-icon-of-repair-tools-vector-id1125957755"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://thumbs.dreamstime.com/b/discussion-solution-logo-design-vector-template-consultant-company-sign-icon-information-lightbulb-tech-symbol-geometric-168953677.jpg"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="title-desc">
        <ul>
          <li>
            <h4> ALL IN ONE</h4>
          </li>
          <li>
            <h4> ALL IN ONE</h4>
          </li>
          <li>
            <h4> ALL IN ONE</h4>
          </li>
          <li>
            <h4> ALL IN ONE</h4>
          </li>
        </ul>
      </div>
      <div className="logo1">
        <ul>
          <li>
            Nous nous occupons de tout pour vous. De l'audit, à l'adaptation du
            tableau électrique en passant par le chantier d'installation jusqu'à
            la réception par un organisme agrée et la mise en communication.
          </li>
          <li>
            Nous nous occupons de tout pour vous. De l'audit, à l'adaptation du
            tableau électrique en passant par le chantier d'installation jusqu'à
            la réception par un organisme agrée et la mise en communication.
          </li>
          <li>
            Nous nous occupons de tout pour vous. De l'audit, à l'adaptation du
            tableau électrique en passant par le chantier d'installation jusqu'à
            la réception par un organisme agrée et la mise en communication.
          </li>
          <li>
            Nous nous occupons de tout pour vous. De l'audit, à l'adaptation du
            tableau électrique en passant par le chantier d'installation jusqu'à
            la réception par un organisme agrée et la mise en communication.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
