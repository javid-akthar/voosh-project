import React from 'react';
import classes from './Page6.module.css';
import Serviceability from '../images/Serviceability.webp'
import PerformanceIcon from '../images/performance_icon.webp'

function Page6(props) {
    return (
        <div className={classes.page6_container}>
          <div className={classes.features_img_container}>
            <img
              src={Serviceability}
              className={classes.features_img_icon}
              alt="features_img_icon"
            />
          </div>
          <div className={classes.page6_text_container}>
            <div className={classes.page_title_container}></div>
            <div className={classes.page_title_icon_container}>
              <img
                src={PerformanceIcon}
                className={classes.page_title_icon}
                alt="page_title_icon"
              />
            </div>
            <div className={classes.title}>View store-level performance</div>
            <div className={classes.subtitle}>
              Understand your outlets' end-to-end operations to take the right
              steps for your business.
            </div>
          </div>
        </div>
    );
}

export default Page6;