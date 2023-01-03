import React from 'react';
import revenueUpArrow from '../images/revenue-up-arrow.webp'
import classes from './Revenue.module.css';

function Revenue(props) {
    return (
        <div className={classes.revenue_container}>
          <div className={classes.revenue_inner_container}>
            <div className={classes.revenue_title}>
              Since partnering with Voosh, restaurant partners have seen an
              average increase of 10% in revenues
            </div>
            <div className={classes.revenue_subtext}>Along with:</div>
            <div className="revenue-states-container">
              <div className={classes.revenue_states_box}>
                <div className={classes.revenue_state_value}>10%</div>
                <div className={classes.revenue_state_subtext}>Increase in revenue</div>
                <div className={classes.revenue_state_title}>Better Operations</div>
              </div>
              <div className={classes.revenue_states_box}>
                <div className={classes.revenue_state_value}>0.5+</div>
                <div className={classes.revenue_state_subtext}>
                  Increase in Customer ratings
                </div>
                <div className={classes.revenue_state_title}>Better CX</div>
              </div>
              <div className={classes.revenue_states_box}>
                <div className={classes.revenue_state_value}>5%</div>
                <div className={classes.revenue_state_subtext}>
                  Extra payout by DD and UE
                </div>
                <div className={classes.revenue_state_title}>Better Financial</div>
              </div>
            </div>
            <img
              src={revenueUpArrow}
              className={classes.revenue_up_arrow}
              alt ={"revenue-up-arrow"}
            />
          </div>
        </div>
    );
}

export default Revenue;