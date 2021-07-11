import React, { useEffect } from "react";
import "./Home.css";
import hotelBg from "../../imgs/hotelBg.jpg";
import hotelSubBg from "../../imgs/hotelSubBg.jpg";
import hotelLogo from "../../imgs/hotelLogo.png";

import Services from "./Services/Services";
import Offers from "./Offers/Offers";
import Guestbook from "./Guestbook/Guestbook";
import Contact from "../Contact/Contact";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <section className="landing">
        <div className="Home-content">
          <img src={hotelLogo} className="hotel-logo" alt="hotelLogo" />
          <div className="slogen">
            <h1>Life Is Beautiful</h1>
            <h3>Book A Room Now To Enjoy It</h3>
          </div>
        </div>
        <img src={hotelBg} className="Home-bg" alt="hotel" />
      </section>
      <div className="Home-subBgContainer">
        <img src={hotelSubBg} className="Home-subBg" alt="hotel" />
        <h3 className="signature">Have Fun With Us!</h3>
      </div>

      <Services />
      <Offers />
      <Guestbook />
      <Contact />
    </div>
  );
};

export default Home;
