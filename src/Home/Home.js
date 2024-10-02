import React from "react";
import { Fragment } from "react";
import "./css/main.css";
import img1 from "./image/1.jpg";
import img2 from "./image/2.jpg";
import img3 from "./image/3.jpg";
import img4 from "./image/4.jpg";
import img5 from "./image/5.jpg";
// import img6 from "./image/6.jpg";
import img6 from "./image/games.png";
// import logo from "./image/logo8-removebg-preview.png";
import Header from "../general/Header";
const gotoGames = () => {
  window.location.href = "/sustainify/games";
};

const gotoStats = () => {
  window.location.href = "/sustainify/stats";
};
const Home = () => {
  return <Fragment>
    <div>
      <Header />
      <div className="card--container">

        <div className="card__image">
          <img src={img1} alt="img1" />
          <p className="card--content">STUDY PLAN</p>
        </div>
        <div className="card__image">
          <img src={img2} alt="img1" />
          <p className="card--content">RAISING AWARENESS</p>
        </div>
        <div className="card__image">
          <img src={img3} alt="img1" />
          <p className="card--content">CHAT</p>
        </div>
        <div className="card__image">
          <img src={img4} alt="img1" />
          <p className="card--content">DAILY AWARDS</p>
        </div>
        <div className="card__image">
          <img src={img5} alt="img1" onClick={gotoStats}/>
          <p className="card--content">STATISTICS</p>
        </div>
        <div className="card__image">
          <img src={img6}  onClick={gotoGames} alt="img1" />
          <p className="card--content">PLAY GAMES</p>
        </div>
      </div>
    </div>
  </Fragment>
}

export default Home;