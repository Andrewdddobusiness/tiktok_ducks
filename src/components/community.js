import React from 'react';
import './styles.css';

import Hidden from "@material-ui/core/Hidden";

function Community() {

  return (
    <div class="section-divider">
        <Hidden mdDown>
            <div class="community-section-container">
                <div class='font-2'>
                    Join the Community
                </div>
                <div class='font-4'>
                    Our community is about learning, sharing, and building. <br/>
                    Join the Drippy Ducks community today!
                </div>
                <div>
                    <button type="button" class="community-button" onClick={{}}>Discord Coming Soon!</button>
                </div>
                
            </div>
        </Hidden>

        <Hidden xsDown lgUp>
            <div class="community-section-container">
                <div class='font-2'>
                    Join the Community
                </div>
                <div class='font-4'>
                    Our community is about learning, sharing, and building.<br/>
                    Join the Drippy Ducks community today!
                </div>
                <div>
                    <button type="button" class="community-button" onClick={{}}>Discord Coming Soon!</button>
                </div>
            </div>
        </Hidden>

        <Hidden smUp>
            <div class="community-section-container">
                <div class='font-2'>
                    Join the Community
                </div>
                <div class='font-5'>
                    Our community is about learning, sharing, and building.
                    Join the Drippy Ducks community today!
                </div>
                <div>
                    <button type="button" class="community-button" style={{marginTop: '10%', marginBottom: '10%', padding: '5%'}}onClick={{}}>Discord Coming Soon!</button>
                </div>
            </div>
        </Hidden>
        
    </div>
  );
}

export default Community;