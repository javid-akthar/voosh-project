import React from 'react';
import classes from './Page2.module.css'
import understandBusiness from '../images/understand_business_bg.webp'
import page2Icon1 from '../images/page2_icon1.webp'
import page2Icon2 from '../images/page2_icon2.webp'
import page2Icon3 from '../images/page2_icon3.webp'
import page2Icon4 from '../images/page2_icon4.webp'

function Page2(props) {
    return (
        <div className={classes.page2_container}>
          <div className="page2-details-container">
            <div className="title">
              Understand your business better. Optimize sales and reduce costs.
            </div>
            <div className={classes.subtext}>
              Bring all your outlets and brands into one place. Track what’s
              working and what's not with a click.
            </div>
          </div>
          <div className={classes.page2_features_container}>
            <div className="page2-feature-box">
              <img
                className={classes.page2_feature_icon}
                src={page2Icon1}
                alt={"page2_icon1"}
              />
              <div className={classes.page2_feature_text}>Hassle free acess to Data</div>
            </div>
            <div className={classes.page2_feature_box}>
              <img
                className={classes.page2_feature_icon}
                src={page2Icon2}
                alt="page2_icon2"
              />
              <div className={classes.page2_feature_text}>
                Actionable Insights on all Reviews
              </div>
            </div>
            <div className={classes.page2_feature_box}>
              <img
                className={classes.page2_feature_icon}
                src={page2Icon3}
                alt="page2_icon3"
              />
              <div className={classes.page2_feature_text}>
                Simplified Financial Reconcilliation
              </div>
            </div>
            <div className={classes.page2_feature_box}>
              <img
                className={classes.page2_feature_icon}
                src={page2Icon4}
                alt = "page2_icon4"
              />
              <div className={classes.page2_feature_text}>
                Higher Sales &amp; Optimized Ops
              </div>
            </div>
          </div>
          <img
            className={classes.page2_bg}
            src={understandBusiness}
            alt = "understand_business_bg"
          />
        </div>
    );
}

export default Page2;