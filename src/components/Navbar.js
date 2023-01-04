import React from 'react';
import VooshLogoImg from '../images/VooshLogo.webp'
import classes from './Navbar.module.css'
import VooshLogo from './UI/VooshLogo';

function Navbar(props) {
    return (
        <div className={classes.navbar_container}>
          <div>
            <VooshLogo
              src={VooshLogoImg}
              alt = "voosh_logo"
            />
          </div>
        </div>
    );
}

export default Navbar;