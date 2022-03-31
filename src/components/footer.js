import React from 'react';
import './styles.css';

import { Icon } from '@iconify/react';

import '../fonts/Titan One.ttf';

import DuckLogo from '../images/white-logo.png';
import DuckTextLogo from '../images/drippy-ducks-logo-v2.png';

import Hidden from "@material-ui/core/Hidden";


function Footer(roadmapRef, missionRef) {
  return (
    <div class="section-divider" style={{backgroundColor: '#1b191e'}}>
        <Hidden mdDown>
        <div class="footer-container">
                <div class="row">
                    <div class="column left" style={{textAlign: 'left'}}>
                        <a href="/" style={{paddingTop: '6%', textDecoration: 'none', display: 'flex'}}>
                            <img src={DuckTextLogo} alt="profile" height="15%" width="15%"/> {/* FIX SIZING */}
                        </a>
                        
                        <div class="font-4" style={{ textAlign: 'left', marginTop: '15%'}}>@2021 Drippy Ducks. All Rights Reserved.</div>
                    </div>
                    <div class="column right">
                        <div style={{justifyContent: 'left', alignItems: 'left', display: 'flex', marginTop: '15%', marginBottom: '5%'}}>
                            <a href="/" class="social-media-button"> 
                                {/* add popup with coming soon! */}
                                <Icon icon="akar-icons:discord-fill"/>
                            </a>
                            <a href="https://twitter.com/DrippyDucks" class="social-media-button" >
                                <Icon icon="akar-icons:twitter-fill"/>
                            </a>
                            <a href="/" class="social-media-button">
                                {/* add popup with coming soon! */}
                                <Icon icon="akar-icons:instagram-fill"/>
                            </a>
                            
                        </div>
                        <div>
                            {/* <div class="font-4 nav-button cursor" onClick={goToTop} >Home</div>
                            <div class="font-4 nav-button cursor" onClick={goToRoadmap}>Roadmap</div>
                            <div class="font-4 nav-button cursor" onClick={goToMission}>About</div>
                            <div class="font-4 nav-button cursor" onClick={goToBottom}>Community</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </Hidden>

        <Hidden xsDown mdUp>
        <div class="footer-container">
                <div class="row">
                    <div class="column left" style={{textAlign: 'left'}}>
                        <a href="/" style={{paddingTop: '6%', textDecoration: 'none', display: 'flex'}}>
                            <img src={DuckTextLogo} alt="profile" height="20%" width="20%"/> {/* FIX SIZING */}
                        </a>
                        
                        <div class="font-5" style={{ textAlign: 'left', marginTop: '15%'}}>@2021 Drippy Ducks. All Rights Reserved.</div>
                    </div>
                    <div class="column right">
                        <div style={{justifyContent: 'left', alignItems: 'left', display: 'flex', marginTop: '15%', marginBottom: '5%'}}>
                            <a href="/" class="social-media-button"> 
                                {/* add popup with coming soon! */}
                                <Icon icon="akar-icons:discord-fill"/>
                            </a>
                            <a href="https://twitter.com/DrippyDucks" class="social-media-button" >
                                <Icon icon="akar-icons:twitter-fill"/>
                            </a>
                            <a href="/" class="social-media-button">
                                {/* add popup with coming soon! */}
                                <Icon icon="akar-icons:instagram-fill"/>
                            </a>
                            
                        </div>
                        <div>
                            {/* <div class="font-4 nav-button cursor" onClick={goToTop} >Home</div>
                            <div class="font-4 nav-button cursor" onClick={goToRoadmap}>Roadmap</div>
                            <div class="font-4 nav-button cursor" onClick={goToMission}>About</div>
                            <div class="font-4 nav-button cursor" onClick={goToBottom}>Community</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </Hidden>

        <Hidden smUp>
        <div class="footer-container">
                <div class="row">
                    <div class="column left" style={{textAlign: 'left'}}>
                        <a href="/" style={{paddingTop: '6%', textDecoration: 'none', display: 'flex'}}>
                            <img src={DuckTextLogo} alt="profile" height="15%" width="15%"/> {/* FIX SIZING */}
                        </a>
                        
                        <div class="font-5" style={{ textAlign: 'left', marginTop: '15%'}}>@2021 Drippy Ducks. All Rights Reserved.</div>
                    </div>
                    <div class="column right">
                        <div style={{justifyContent: 'left', alignItems: 'left', display: 'flex', marginTop: '15%', marginBottom: '5%'}}>
                            <a href="/" class="social-media-button"> 
                                {/* add popup with coming soon! */}
                                <Icon icon="akar-icons:discord-fill"/>
                            </a>
                            <a href="https://twitter.com/DrippyDucks" class="social-media-button" >
                                <Icon icon="akar-icons:twitter-fill"/>
                            </a>
                            <a href="/" class="social-media-button">
                                {/* add popup with coming soon! */}
                                <Icon icon="akar-icons:instagram-fill"/>
                            </a>
                            
                        </div>
                        <div>
                            {/* <div class="font-4 nav-button cursor" onClick={goToTop} >Home</div>
                            <div class="font-4 nav-button cursor" onClick={goToRoadmap}>Roadmap</div>
                            <div class="font-4 nav-button cursor" onClick={goToMission}>About</div>
                            <div class="font-4 nav-button cursor" onClick={goToBottom}>Community</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </Hidden>
           
    </div>
  );
}

export default Footer;