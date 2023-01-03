import React from 'react';
import classes from './OutletPage.module.css';
import outletGraphic from '../images/outlet_graphic_vertical.webp'


function OutletPage(props) {
    return (
        <div className={classes.outletPage_container}>
          <div className={classes.container}>
            <div className={classes.title_heading}>
              Foodservice brands lack the ability to streamline data from
              multiple sources on one platform
            </div>
            <div className={classes.title_subheading}>
              Different data channels do not speak to each other
            </div>
          </div>
          <div className={classes.image_container}>
            <img
              src={outletGraphic}
              className={classes.image_icon}
              alt={"image_icon"}
            />
          </div>
        </div>
    );
}

export default OutletPage;