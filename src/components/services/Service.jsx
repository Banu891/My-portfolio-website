import React from "react";
import "./service.css";
import { BsCheck2 } from "react-icons/bs";

function Service() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2 className="services__list-icon" />
              <p>Developed the architecture and logic of the project</p>
            </li>
            <li>
              <BsCheck2 className="services__list-icon" />
              <p>Stylization of project</p>
            </li>
            <li>
              <BsCheck2 className="services__list-icon" />
              <p>Developing Functional React Components</p>
            </li>
            <li>
              <BsCheck2 className="services__list-icon" />
              <p>Specifying routing components</p>
            </li>
            <li>
              <BsCheck2 className="services__list-icon" />
              <p>Transferring logic from React to Redux store(Thunk)</p>
            </li>
            <li>
              <BsCheck2 className="services__list-icon" />
              <p>Website layout based on layouts (Photoshop, Figma)</p>
            </li>
            <li>
              <BsCheck2 className="services__list-icon" />
              <p>
                Development of interactive page elements (tabs, sliders,
                accordions, carousels)
              </p>
            </li>
            <li>
              <BsCheck2 className="services__list-icon" />
              <p>Semantic layout</p>
            </li>
            <li>
              <BsCheck2 className="services__list-icon" />
              <p>Development and validation of forms on the site</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2 className="services__list-icon" />
              <p>Set up back-end</p>
            </li>
            <li>
              <BsCheck2 className="services__list-icon" />
              <p>
                Set up endpoints according to REST API, authorization, sessions
              </p>
            </li>
            <li>
              <BsCheck2 className="services__list-icon" />
              <p>
                Developed the architecture of the application and the database
              </p>
            </li>
            <li>
              <BsCheck2 className="services__list-icon" />
              <p>Set up connections in the database</p>
            </li>
            <li>
              <BsCheck2 className="services__list-icon" />
              <p>Ajax fetch API/Axios</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Service;
