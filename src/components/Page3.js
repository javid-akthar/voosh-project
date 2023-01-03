import React from 'react';
import classes from './Page3.module.css'
import CentralisedDashboard from '../images/Centralised_Dashboard.webp'

function Page3(props) {
    return (
        <div className={classes.page3_container}>
          <div className={classes.page3_text_container}>
            <div className={classes.page_title_container}></div>
            <div className={classes.page_title_icon_container}>
              <img
                src="./Voosh_files/free_access.8ce7ed5e6bacd50afa8f.webp"
                className={classes.page_title_icon}
                alt={"page_title_icon"}
              />
            </div>
            <div className={classes.title}>
              Centralized Dashboard for all your outlets and brands
            </div>
            <div className={classes.subtitle}>
              All your data brought together under a single dashboard. Giving
              you 10,000 ft. view as well as granular order-level data.
            </div>
          </div>
          <div className={classes.features_img_container}>
            <img
              src={CentralisedDashboard}
              className={classes.features_img_icon}
              alt={"features_img_icon"}
            />
          </div>
        </div>
    );
}

export default Page3;