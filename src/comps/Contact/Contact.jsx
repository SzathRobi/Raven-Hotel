import React, { useEffect } from "react";
import RoomRoundedIcon from "@material-ui/icons/RoomRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import PhoneAndroidRoundedIcon from "@material-ui/icons/PhoneAndroidRounded";

import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className="Contact">
      <h2>Raven Hotel</h2>
      <div className="info-container">
        <div className="contact-info">
          <h4>Location:</h4>
          <div>
            <RoomRoundedIcon className="contact-icon" />
            <div>
              <h5>1356 Exellence Street 401.</h5>
              <h5>Bekasi, Indonesia</h5>
            </div>
          </div>
        </div>
        <div className="contact-info">
          <h4>Reception:</h4>
          <div>
            <PhoneRoundedIcon className="contact-icon" />
            <h5>+1 (401)401-5445 </h5>
          </div>
        </div>
        <div className="contact-info">
          <h4>Restaurant:</h4>
          <div>
            <PhoneAndroidRoundedIcon className="contact-icon" />
            <h5>+62 (401)401-5446 </h5>
          </div>
        </div>
      </div>

      <p className="copyrights">
        Copyright Â©2020 All rights reserved | This template is made by
        SzathRobi
      </p>
    </footer>
  );
};

export default Contact;
