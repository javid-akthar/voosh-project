import React from 'react';
import './Page5.css'
import Complexity from '../images/complexity.webp';
import Performance from '../images/Performance.webp'

function Page5(props) {
    return (
        <div className="page5_container">
          <div className="page5_text_container">
            <div className="page_title_container"></div>
            <div className="page_title_icon_container">
              <img
                src={Complexity}
                className="page_title_icon"
                alt="complexity"
              />
            </div>
            <div className="page5_title">Get a hold of your commissions</div>
            <div className="subtitle">
              Understand your financial data in the way you want and never pay
              extra again.
            </div>
          </div>
          <div className="features_img_container">
            <img
              src={Performance}
              className="features_img_icon"
              alt="Performance"
            />
          </div>
        </div>
    );
}

export default Page5;