import React from 'react';
import './styles.css';

import DuckTextLogo from '../images/drippy-ducks-logo-v2.png';

import Hidden from "@material-ui/core/Hidden";

function Header() {

  return (
    <div>
        <div class="container-fluid">
          <div class="nav"> {/* FIX SIZING */}
          <Hidden mdDown>
            <div className="container">
            <img style={{paddingTop: '5%'}} src={DuckTextLogo} alt="profile" height="25%" width="25%"/>
            <div class='font-2' style={{margin: '2%'}}>An exclusive collection of 1,111 Duck NFTs on the Solana Blockchain</div>
            </div>
          </Hidden>

          <Hidden smDown mdUp>
            <div className="container">
            <img style={{paddingTop: '5%'}} src={DuckTextLogo} alt="profile" height="25%" width="25%"/>
            <div class='font-2' style={{margin: '2%'}}>An exclusive collection of 1,111 Duck NFTs on the Solana Blockchain</div>
            </div>
          </Hidden>

          <Hidden smUp>
            <div className="container">
            <img style={{paddingTop: '15%'}} src={DuckTextLogo} alt="profile" height="50%" width="50%"/>
            <div class='font-3' style={{margin: '5%'}}>An exclusive collection of 1,111 Duck NFTs on the Solana Blockchain</div>
            </div>
          </Hidden>
          
            {/* <ul class="nav">
              <li class="nav-item font-3 cursor" onClick={scrollHome} href="/">Home</li>
              <li class="nav-item font-3 cursor" onClick={goToRoadmap} href="/">Roadmap</li>
              <li class="nav-item font-3 cursor" onClick={goToMission} href="/">About</li>
              <li class="nav-item font-3 cursor" onClick={goToCommunity} href="/">Community</li>
            </ul> */}
          </div>
        </div>
    </div>
  );
}

export default Header;

