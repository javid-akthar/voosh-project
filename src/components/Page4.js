import React from 'react';
import './Page4.css';
// import centralisedDashboard from '../images/Centralised_Dashboard.webp';
import FinancialComplexity from '../images/Financial_complexity.webp';
import serviceabilityIcon from '../images/serviceability_icon.webp'

function Page4(props) {
    return (
        <div className="page4_container">
        <div className="features_img_container">
          <img
            src={FinancialComplexity}
            className="features_img_icon"
            alt="Financial_complexity_img"
          />
        </div>
        <div className="page4_text_container">
          <div className="page_title_container"></div>
          <div className="page_title_icon_container">
            <img
              src={serviceabilityIcon}
              className="page_title_icon"
              alt="serviceability_icon"
            />
          </div>
          <div className="page4_title">
            Machine learning-powered insights into your reviews
          </div>
          <div className="subtitle">
            Understand all your reviews across Ubereats,Doordash
            etc.Understand what’s working and what isn’t on a store or brand
            level.
          </div>
        </div>
      </div>
    );
}

export default Page4;