import React,{ useRef } from 'react';

import Header from '../components/header';
import Carousel from '../components/carousel';
import RoadmapList from '../components/roadmapList';
import Mission from '../components/mission';
import Community from '../components/community';
// import Footer from '../components/footer';

import { Icon } from '@iconify/react';

import '../fonts/Titan One.ttf';

import DuckLogo from '../images/white-logo.png';
import DuckTextLogo from '../images/drippy-ducks-logo-v2.png';

import Hidden from "@material-ui/core/Hidden";

function Main() {
  const roadmapRef = React.useRef(null);
  const missionRef = useRef(null);
  const communityRef = useRef(null);

  const goToTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    });
  };
  const goToRoadmap=()=>{
    roadmapRef.current.scrollIntoView({ behavior: "smooth", block: "end"});
  };
  const goToMission=()=>{
    missionRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  // const goToCommunity=()=>{
  //   communityRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  // };
  const goToBottom = () => {
    window.scrollTo({
      top:10000,
      behavior: "smooth"
    });
  };

  return (
    <div >

      <div class="banner-overlay" style={{backgroundImage: 'url(' + require('../images/dd-website-background.png') + ')'}}>
        <Header roadmapRef={roadmapRef} missionRef={missionRef} communityRef={communityRef}/>
        <Hidden mdDown>
            <div className="container">
            <ul class="nav">
              <li class="nav-item font-3 cursor" onClick={goToTop} >Home</li>
              <li class="nav-item font-3 cursor" onClick={goToRoadmap} >Roadmap</li>
              <li class="nav-item font-3 cursor" onClick={goToMission} >About</li>
              <li class="nav-item font-3 cursor" onClick={goToBottom} >Community</li>
            </ul>
            </div>
          </Hidden>

          <Hidden smDown mdUp>
            <div className="container">
            <ul class="nav">
              <li class="nav-item font-3 cursor" onClick={goToTop} >Home</li>
              <li class="nav-item font-3 cursor" onClick={goToRoadmap} >Roadmap</li>
              <li class="nav-item font-3 cursor" onClick={goToMission} >About</li>
              <li class="nav-item font-3 cursor" onClick={goToBottom} >Community</li>
            </ul>
            </div>
          </Hidden>

          <Hidden smUp>
            <div className="container">
            <ul class="nav">
              <li class="nav-item font-4 cursor" onClick={goToRoadmap} >Roadmap</li>
              <li class="nav-item font-4 cursor" onClick={goToMission} >About</li>
              <li class="nav-item font-4 cursor" onClick={goToBottom} >Community</li>
            </ul>
            </div>
          </Hidden>
        
        <Carousel/>
        <div class='diagonal-up'/>
        <div ref={roadmapRef}>
          <RoadmapList />
        </div>
        
        <div class='diagonal-down'/>
        <div ref={missionRef}>
          <Mission />
        </div>
        
      </div>
      <div ref={communityRef} class="banner-overlay" style={{backgroundImage: 'url(' + require('../images/dd-banner-website-background.png') + ')'}}>
        <Community/>
      </div>
        {/* <Footer roadmapRef={roadmapRef} missionRef={missionRef} communityRef={communityRef}/> */}
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
                            <a disabled="true" class="social-media-button-disabled"> 
                                {/* add popup with coming soon! */}
                                <Icon icon="akar-icons:discord-fill"/>
                            </a>
                            <a href="https://twitter.com/DrippyDucks" class="social-media-button" >
                                <Icon icon="akar-icons:twitter-fill"/>
                            </a>
                            <a class="social-media-button-disabled">
                                {/* add popup with coming soon! */}
                                <Icon icon="akar-icons:instagram-fill"/>
                            </a>
                            
                        </div>
                        <div>
                            <div class="font-4 nav-button cursor" onClick={goToTop} >Home</div>
                            <div class="font-4 nav-button cursor" onClick={goToRoadmap}>Roadmap</div>
                            <div class="font-4 nav-button cursor" onClick={goToMission}>About</div>
                            <div class="font-4 nav-button cursor" onClick={goToBottom}>Community</div>
                        </div>
                    </div>
                </div>
            </div>
          </Hidden>

          <Hidden smDown mdUp>
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
                            <a disabled="true" class="social-media-button-disabled"> 
                                {/* add popup with coming soon! */}
                                <Icon icon="akar-icons:discord-fill"/>
                            </a>
                            <a href="https://twitter.com/DrippyDucks" class="social-media-button" >
                                <Icon icon="akar-icons:twitter-fill"/>
                            </a>
                            <a class="social-media-button-disabled">
                                {/* add popup with coming soon! */}
                                <Icon icon="akar-icons:instagram-fill"/>
                            </a>
                            
                        </div>
                        <div>
                            <div class="font-4 nav-button cursor" onClick={goToTop} >Home</div>
                            <div class="font-4 nav-button cursor" onClick={goToRoadmap}>Roadmap</div>
                            <div class="font-4 nav-button cursor" onClick={goToMission}>About</div>
                            <div class="font-4 nav-button cursor" onClick={goToBottom}>Community</div>
                        </div>
                    </div>
                </div>
            </div>
          </Hidden>

          <Hidden smUp>
          <div class="footer-container" style={{paddingTop: '10%', paddingBottom: '20%'}}>
  
                    <div style={{textAlign: 'left'}}>
                        <a href="/" style={{paddingTop: '6%', textDecoration: 'none', display: 'flex'}}>
                            <img src={DuckTextLogo} alt="profile" height="40%" width="40%"/> {/* FIX SIZING */}
                        </a>
                        
                        
                    </div>
                    <div>
                        <div style={{justifyContent: 'left', alignItems: 'left', display: 'flex', marginTop: '15%', marginBottom: '5%'}}>
                            <a disabled="true" class="social-media-button-disabled"> 
                                {/* add popup with coming soon! */}
                                <Icon icon="akar-icons:discord-fill"/>
                            </a>
                            <a href="https://twitter.com/DrippyDucks" class="social-media-button" >
                                <Icon icon="akar-icons:twitter-fill"/>
                            </a>
                            <a class="social-media-button-disabled">
                                {/* add popup with coming soon! */}
                                <Icon icon="akar-icons:instagram-fill"/>
                            </a>
                            
                        </div>
                        <div>
                            <div class="font-4 nav-button cursor" onClick={goToTop} >Home</div>
                            <div class="font-4 nav-button cursor" onClick={goToRoadmap}>Roadmap</div>
                            <div class="font-4 nav-button cursor" onClick={goToMission}>About</div>
                            <div class="font-4 nav-button cursor" onClick={goToBottom}>Community</div>
                        </div>

                        <div class="font-5" style={{ textAlign: 'left', marginTop: '25%'}}>@2021 Drippy Ducks. All Rights Reserved.</div>
                    </div>

            </div>
          </Hidden>
            
        </div>
    </div>
  );
}

export default Main;

