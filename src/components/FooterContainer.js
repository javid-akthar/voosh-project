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
    <div class="footer_container">
      <div class="left_container">
        <div>
          <img
            src={VooshLogo}
            class="voosh_logo"
            alt="voosh_logo"
          />
        </div>
        <div class="description">
          A company that is dedicated to making food a more personal experience,
          through technology and data.
        </div>
      </div>
      <div class="right_container">
        <div class="heading">Contact</div>
        <a href="tel: +918105050640" class="subheading">
          Call Us
        </a>
        <a href="mailto:%20harsh@voosh.in" class="subheading">
          E-mail Us
        </a>
        <div class="social_container">
          <a href="https://www.facebook.com/vooshindia/">
            <img
              src={Facebook}
              class="social_icon"
              alt="social_icon"
            />
          </a>
          <a href="https://www.instagram.com/vooshindia/?hl=en">
            <img
              src={Instagram}
              class="social_icon"
              alt="social_icon"
            />
          </a>
          <a href="https://mobile.twitter.com/vooshindia">
            <img
              src={Twitter}
              class="social_icon"
              alt="social_icon"
            />
          </a>
          <a href="https://www.linkedin.com/authwall?trk=bf&amp;trkInfo=AQHlkYD1eo2WrQAAAYFRU7AAVX_Z3k6yMvrpaww70Wfiv3QhvYIP9T7E1VjEUqiMzNSuUur6Cm5Y9sL2f49gKFhDtLRtup0VvCzzYVGLFJsvZpGF7RYa4PiZ4-n5vWqBbCkO4bY=&amp;original_referer=&amp;sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fvooshfoods%2F">
            <img
              src={LinkedIn}
              class="social_icon"
              alt="social_icon"
            />
          </a>
        </div>
      </div>
      <div class="signature_container">
        <img
          src={Signature}
          class="signature_icon"
          alt="signature_icon"
        />
      </div>
    </div>
  );
}

export default FooterContainer;
