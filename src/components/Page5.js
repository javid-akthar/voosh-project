import React from 'react';
import classes from './Page5.module.css'
import Complexity from '../images/complexity.webp';
import Performance from '../images/Performance.webp'

function Page5(props) {
    return (
        <div className={classes.page5_container}>
          <div className={classes.page5_text_container}>
            <div className={classes.page_title_container}></div>
            <div className={classes.page_title_icon_container}>
              <img
                src={Complexity}
                className={classes.page_title_icon}
                alt="complexity"
              />
            </div>
            <div className={classes.title}>Get a hold of your commissions</div>
            <div className={classes.subtitle}>
              Understand your financial data in the way you want and never pay
              extra again.
            </div>
          </div>
          <div className={classes.features_img_container}>
            <img
              src={Performance}
              className={classes.features_img_icon}
              alt="Performance"
            />
          </div>
        </div>
    );
}

export default Page5;