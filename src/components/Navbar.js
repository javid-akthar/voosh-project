import React from 'react';
import VooshLogo from '../images/VooshLogo.webp'
import classes from './Navbar.module.css'

function Navbar(props) {
    return (
        <div className={classes.navbar_container}>
          <div>
            <img
              src={VooshLogo}
              class={classes.voosh_logo}
              alt = "voosh_logo"
            />
          </div>
        </div>
    );
}

export default Navbar;