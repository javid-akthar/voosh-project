import React from 'react';
import './Page6.css';
import Serviceability from '../images/Serviceability.webp'
import PerformanceIcon from '../images/performance_icon.webp'

function Page6(props) {
    return (
        <div className="page6_container">
          <div className="features_img_container">
            <img
              src={Serviceability}
              className="features_img_icon"
              alt="features_img_icon"
            />
          </div>
          <div className="page6_text_container">
            <div className="page_title_container"></div>
            <div className="page_title_icon_container">
              <img
                src={PerformanceIcon}
                className="page_title_icon"
                alt="page_title_icon"
              />
            </div>
            <div className="page6_title">View store-level performance</div>
            <div className="page6_subtitle">
              Understand your outlets' end-to-end operations to take the right
              steps for your business.
            </div>
          </div>
        </div>
    );
}

export default Page6;