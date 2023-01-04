import React from "react";
import './FooterContainer.css';
import Facebook from '../images/Facebook.webp'
import Instagram from '../images/Instagram.webp'
import VooshLogo from '../images/VooshLogo.webp';
import LinkedIn from '../images/LinkedIn.webp'
import Twitter from '../images/Twitter.webp';
import Signature from '../images/Signature.webp'

function FooterContainer(props) {
  return (
    <div className="footer_container">
      <div className="left_container">
        <div>
          <img
            src={VooshLogo}
            className="voosh_logo"
            alt="voosh_logo"
          />
        </div>
        <div className="description">
          A company that is dedicated to making food a more personal experience,
          through technology and data.
        </div>
      </div>
      <div className="right_container">
        <div className="heading">Contact</div>
        <a href="tel: +918105050640" className="subheading">
          Call Us
        </a>
        <a href="mailto:%20harsh@voosh.in" className="subheading">
          E-mail Us
        </a>
        <div className="social_container">
          <a href="https://www.facebook.com/vooshindia/">
            <img
              src={Facebook}
              className="social_icon"
              alt="social_icon"
            />
          </a>
          <a href="https://www.instagram.com/vooshindia/?hl=en">
            <img
              src={Instagram}
              className="social_icon"
              alt="social_icon"
            />
          </a>
          <a href="https://mobile.twitter.com/vooshindia">
            <img
              src={Twitter}
              className="social_icon"
              alt="social_icon"
            />
          </a>
          <a href="https://www.linkedin.com/authwall?trk=bf&amp;trkInfo=AQHlkYD1eo2WrQAAAYFRU7AAVX_Z3k6yMvrpaww70Wfiv3QhvYIP9T7E1VjEUqiMzNSuUur6Cm5Y9sL2f49gKFhDtLRtup0VvCzzYVGLFJsvZpGF7RYa4PiZ4-n5vWqBbCkO4bY=&amp;original_referer=&amp;sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fvooshfoods%2F">
            <img
              src={LinkedIn}
              className="social_icon"
              alt="social_icon"
            />
          </a>
        </div>
      </div>
      <div className="signature_container">
        <img
          src={Signature}
          className="signature_icon"
          alt="signature_icon"
        />
      </div>
    </div>
  );
}

export default FooterContainer;
