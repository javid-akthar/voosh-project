import React from 'react';
import './Page3.css'
import CentralisedDashboard from '../images/Centralised_Dashboard.webp'
import FreeAccess from '../images/free_access.webp'

function Page3(props) {
    return (
        <div className="page3_container">
          <div className="page3_text_container">
            <div className="page_title_container"></div>
            <div className="page_title_icon_container">
              <img
                src={FreeAccess}
                className="page_title_icon"
                alt={"page_title_icon"}
              />
            </div>
            <div className="page3_title">
              Centralized Dashboard for all your outlets and brands
            </div>
            <div className="subtitle">
              All your data brought together under a single dashboard. Giving
              you 10,000 ft. view as well as granular order-level data.
            </div>
          </div>
          <div className="features_img_container">
            <img
              src={CentralisedDashboard}
              className="features_img_icon"
              alt={"features_img_icon"}
            />
          </div>
        </div>
    );
}

export default Page3;