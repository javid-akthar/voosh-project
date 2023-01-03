import React from 'react';
import landingBg from '../images/landing_bg.webp'
import arrow from '../images/arrow.webp'
import threeLines from '../images/three_lines.webp'
import myProfile from '../images/my_profile.webp'
import page11 from '../images/page1_1.webp'
import page12 from '../images/page1_2.webp'
import page13 from '../images/page1_3.webp'
import page14 from '../images/page1_4.webp'
import page15 from '../images/page1_5.webp'
import page16 from '../images/page1_6.webp'

import classes from './Page1.module.css'


function Page1(props) {
    return (
        <div className={classes.page1_container} id="page1">
        <div className={classes.landing_bg_container}>
          <img
            src= {landingBg}
            className={classes.landing_bg_icon}
            alt = "landing_bg_icon" 
          />
        </div>
         <div className={classes.page1_title_container_content}>
          <div className={classes.page1_title_container}>
            <div className={classes.title}>
              Consolidate your restaurants' insights in one place. Unlock
              growth.
            </div>
            <div className={classes.subtitle}>
              Your one stop solution to view mission-critical data and
              insights from all your locations in one place.
            </div>
            <div className={classes.button_arrow_container}>
              <div className={classes.button_container_style}>
                <a
                  href="https://voosh.in/#Waitinglist"
                  className={classes.button_container}
                  ><div><span className={classes.text_button}>Book Demo</span></div></a
                >
              </div>
              <div className={classes.arrow_img_container}>
                <img
                  src={arrow}
                  className={classes.arrow_img}
                  alt = "arrow_img"
                />
              </div>
            </div>
          </div>
         
          <div className={classes.my_profile_container}>
            <img
              src={threeLines}
              className={classes.three_lines}
              alt="three_lines"
            /><img
              src={myProfile}
              className={classes.my_profile_icon}
              alt= "profile_icon"
            />
          </div>
          <div className={classes.page1_outlet_container}>
            <img
              src={page11}
              className={classes.page1_outlet_icon1}
              alt = "page1-outlet-icon1"
            /><img
              src={page12}
              className={classes.page1_outlet_icon2}
              alt = "page1-outlet-icon2"
            /><img
              src={page13}
              className={classes.page1_outlet_icon3}
              alt = "page1-outlet-icon3"
            /><img
              src={page14}
              className={classes.page1_outlet_icon4}
              alt = "page1-outlet-icon4"
            /><img
              src={page15}
              className={classes.page1_outlet_icon5}
              alt = "page1-outlet-icon5"
            /><img
              src={page16}
              className={classes.page1_outlet_icon6}
              alt = "page1-outlet-icon6"
            />
          </div>
        </div> 
      </div>
    );
}

export default Page1;