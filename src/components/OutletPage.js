import React from 'react';
// import classes from './OutletPage.module.css';
import './OutletPage.css';
import outletGraphic from '../images/outlet_graphic_vertical.webp'


function OutletPage(props) {
    return (
        <div className="outletPage_container">
          <div className="container">
            <div className="title_heading">
              Foodservice brands lack the ability to streamline data from
              multiple sources on one platform
            </div>
            <div className="title_subheading">
              Different data channels do not speak to each other
            </div>
          </div>
          <div className="image_container">
            <img
              src={outletGraphic}
              className="image_icon"
              alt={"outletGraphic_image_icon"}
            />
          </div>
        </div>
    );
}

export default OutletPage;