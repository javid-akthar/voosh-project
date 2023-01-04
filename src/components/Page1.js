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
import Page1Img from './UI/Page1/Page1Img'
import Page1TitleContainerContent from './UI/Page1/Page1TitleContainerContent'
import Page1TitleContainer from './UI/Page1/Page1TitleContainer'
import Title from './UI/Page1/Title';
import SubTitle from './UI/Page1/Subtitle'
import ButtonArrowContainer from './UI/Page1/ButtonArrowContainer'
import MyProfileContainer from './UI/Page1/MyProfileContainer'
import ThreeLines from './UI/Page1/ThreeLines'
import MyProfileIcon from './UI/Page1/MyProfileIcon'
import Page1OutletContainer from './UI/Page1/Page1OutletContainer'
import Page1OutletIcon1 from './UI/Page1/Page1OutletIcon1'
import Page1OutletIcon2 from './UI/Page1/Page1OutletIcon2';
import Page1OutletIcon3 from './UI/Page1/Page1OutletIcon3';
import Page1OutletIcon4 from './UI/Page1/Page1OutletIcon4';
import Page1OutletIcon5 from './UI/Page1/Page1OutletIcon5';
import Page1OutletIcon6 from './UI/Page1/Page1OutletIcon6';

function Page1(props) {
    return (
        <Page1Img  id="page1">
        <div className={classes.landing_bg_container}>
          <img
            src= {landingBg}
            className={classes.landing_bg_icon}
            alt = "landing_bg_icon" 
          />
        </div>
         <Page1TitleContainerContent >
          <Page1TitleContainer >
            <Title >
              Consolidate your restaurants' insights in one place. Unlock
              growth.
            </Title>
            <SubTitle>
              Your one stop solution to view mission-critical data and
              insights from all your locations in one place.
            </SubTitle>
            <ButtonArrowContainer>
              <div className={classes.button_container_style}>
                <a
                  href="#Waitinglist"
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
            </ButtonArrowContainer>
          </Page1TitleContainer>
         
          <MyProfileContainer>
            <ThreeLines
              src={threeLines}
              alt="three_lines"
            />
            <MyProfileIcon
              src={myProfile}
              alt= "profile_icon"
            />
          </MyProfileContainer>
          <Page1OutletContainer>
            <Page1OutletIcon1
              src={page11}
              alt = "page1-outlet-icon1"
            /><Page1OutletIcon2
              src={page12}
              alt = "page1-outlet-icon2"
            /><Page1OutletIcon3
              src={page13}
              alt = "page1-outlet-icon3"
            /><Page1OutletIcon4
              src={page14}
              alt = "page1-outlet-icon4"
            /><Page1OutletIcon5
              src={page15}
              alt = "page1-outlet-icon5"
            /><Page1OutletIcon6
              src={page16}
              alt = "page1-outlet-icon6"
            />
          </Page1OutletContainer>
        </Page1TitleContainerContent> 
      </Page1Img>
    );
}

export default Page1;