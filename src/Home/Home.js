import React from "react";
import { Fragment } from "react";
import "./css/main.css";
import img1 from "./image/1.jpg";
import img2 from "./image/2.jpg";
import img3 from "./image/3.jpg";
import img4 from "./image/4.jpg";
import img5 from "./image/5.jpg";
import img6 from "./image/6.jpg";
import logo from "./image/logo8-removebg-preview.png";
const Home = () => {
  return <Fragment>
    <div>
      <header>
        <div class="header-icons">
          <div>
            <div class="logo-section">
              <img src={logo} alt="logo" className="logo-icon" />
            </div>
          </div>
        </div>
      </header>
      <div className="card--container">
        <div className="card">
          <div className="card__image">
            <img src={img1} alt="img1" />
          </div>
          <div className="card__image">
            <img src={img2} alt="img1" />
          </div>
          <div className="card__image">
            <img src={img3} alt="img1" />
          </div>
          <div className="card__image">
            <img src={img4} alt="img1" />
          </div>
          <div className="card__image">
            <img src={img5} alt="img1" />
          </div>
          <div className="card__image">
            <img src={img6} alt="img1" />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}

export default Home;