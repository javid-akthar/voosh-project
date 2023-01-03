import React from 'react';
import classes from './AboutUsPage.module.css'
import aboutUsBg from '../images/about_us_bg.webp'
import investor1 from '../images/investor1.webp'
import investor2 from '../images/investor2.webp'
import investor3 from '../images/investor3.webp'
import investor4 from '../images/investor4.webp'
import investor5 from '../images/investor5.webp'

function AboutUsPage(props) {
    return (
        <div className={classes.aboutUs_container}>
          <div className={classes.about_us_details_component}>
            <div className={classes.about_us_text_container}>
              <div className={classes.title}>ABOUT US</div>
              <div className={classes.subtext}>
                <span className={classes.brand_name}>Voosh</span> is a food technology
                company aiming to empower Foodservice brands using our
                proprietary visualization tools and data science.We’re building
                a one stop visualization tool for CXOs, operational heads or
                zonal managers to get business insights and make real time
                decisions to help grow their online sales.
              </div>
            </div>
            <img
              src={aboutUsBg}
              className={classes.about_us_bg}
              alt="about_us_bg"
            />
          </div>
          <div className={classes.about_us_investor}>
            <div className={classes.title}>
              We are backed by some of the best global investors:
            </div>
            <div className={classes.brands_container}>
              <img
                className={classes.brand_image}
                src={investor2}
                alt="investor2"
              /><img
                className={classes.brand_image}
                src={investor3}
                alt="investor3"
              /><img
                className={classes.brand_image}
                src={investor4}
                alt="investor4"
              /><img
                className={classes.brand_image}
                src={investor1}
                alt="investor1"
              /><img
                className={classes.brand_image}
                src={investor5}
                alt="investor5"
              />
            </div>
          </div>
        </div>
    );
}

export default AboutUsPage;