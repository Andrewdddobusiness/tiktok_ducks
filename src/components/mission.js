import React from 'react';
import './styles.css';

import Profile from '../images/profile.png';

import ReactPlayer from 'react-player';
import { Icon } from '@iconify/react';

import Hidden from "@material-ui/core/Hidden";

function Mission() {
  return (
    <div>
        <div>
            
            <Hidden mdDown>
            <div class="section-container">
                <div class='font-2'>
                    I'm on a Mission...
                </div>
                <div class="row">
                    <div class="column split">
                        <img src={Profile} alt="profile" height="50%" width="50%"/>
                        <div class="font-3" style={{textShadow: "0 0 0.5rem #000"}}>
                            @Andrewdddo
                        </div>
                        <br/>
                        <div class="font-4" style={{textShadow: '0 0 0.5rem #000'}}>
                            I'm a Full Stack Software Engineer with a passion for NFTs, Blockchain development, and Content Creation!
                            <br/><br/>I'm definitely not an artist, but I'm pretty decent at googling things and learning on the fly! 
                        </div>
                        <br/>
                        <a href="https://www.tiktok.com/@andrewdddo" style={{fontSize: '2.5rem', margin: '2%'}}>
                            <Icon icon="logos:tiktok-icon" class="font-1"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCLPAUfytUgzLdPZqCo_xPiA" style={{fontSize: '2.5rem', margin: '2%'}}>
                            <Icon icon="logos:youtube-icon" class="font-1"/>
                        </a>
                        <a href="https://twitter.com/andrewdddo" style={{fontSize: '2.5rem', margin: '2%'}}>
                            <Icon icon="logos:twitter" class="font-1"/>
                        </a>
                        <a href="https://www.instagram.com/andrewdddo/" style={{fontSize: '2.5rem', margin: '2%'}}>
                            <Icon icon="logos:instagram-icon" class="font-1"/>
                        </a>

                    </div>
                    <div class="column split">
                        <div class="video-container">
                            <ReactPlayer 
                            url='https://youtube.com/playlist?list=PLCObjQdJ3bqBxxSvNwRDfzbx2dnQ5vyGf' 
                            />
                        </div>
                        
                    </div>
                </div>
                <div class="text-container font-4" style={{textAlign: 'center', textShadow: '0 0 0.5rem #000'}}>
                    My goal is to create a community of learners, builders and developer enthusiasts that wish to grow alongside one another. 
                    This NFT project started out as an experiement, a means for TikTok content... however, now it's evolved into an idea for long-term growth and development.
                    Join us on our mission to create an NFT project and learn how to do it yourself!
                </div>
          </div>


            </Hidden>

            <Hidden xsDown lgUp>
            <div class="section-container">
                <div class='font-2'>
                    I'm on a Mission...
                </div>
                <div class="row">
                    <div class="column split">
                        <img src={Profile} alt="profile" height="50%" width="50%"/>
                        <div class="font-3" style={{textShadow: "0 0 0.5rem #000"}}>
                            @Andrewdddo
                        </div>
                        <br/>
                        <div class="font-4">
                            I'm a Full Stack Software Engineer with a passion for NFTs, Blockchain development, and Content Creation!
                            <br/><br/>I'm definitely not an artist, but I'm pretty decent at googling things and learning on the fly! 
                        </div>
                        <br/>
                        <a href="https://www.tiktok.com/@andrewdddo" style={{fontSize: '2.5rem', margin: '2%'}}>
                            <Icon icon="logos:tiktok-icon" class="font-1"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCLPAUfytUgzLdPZqCo_xPiA" style={{fontSize: '2.5rem', margin: '2%'}}>
                            <Icon icon="logos:youtube-icon" class="font-1"/>
                        </a>
                        <a href="https://twitter.com/andrewdddo" style={{fontSize: '2.5rem', margin: '2%'}}>
                            <Icon icon="logos:twitter" class="font-1"/>
                        </a>
                        <a href="https://www.instagram.com/andrewdddo/" style={{fontSize: '2.5rem', margin: '2%'}}>
                            <Icon icon="logos:instagram-icon" class="font-1"/>
                        </a>

                    </div>
                    <div class="column split">
                        <div class="video-container">
                            <ReactPlayer 
                            url='https://youtube.com/playlist?list=PLCObjQdJ3bqBxxSvNwRDfzbx2dnQ5vyGf' 
                            />
                        </div>
                        
                    </div>
                </div>
                <div class="text-container font-4" style={{textAlign: 'center'}}>
                    My goal is to create a community of learners, builders and developer enthusiasts that wish to grow alongside one another. 
                    This NFT project started out as an experiement, a means for TikTok content... however, now it's evolved into an idea for long-term growth and development.
                    Join us on our mission to create an NFT project and learn how to do it yourself!
                </div>
          </div>


            </Hidden>

            <Hidden smUp>
            <div class="section-container">
                <div class='font-2'>
                    I'm on a <br/>Mission...
                </div>

                 
                <img src={Profile} alt="profile" height="50%" width="50%"/>
                <div class="font-3" style={{textShadow: "0 0 0.5rem #000"}}>
                    @Andrewdddo
                </div>
                <br/>
                <div class="text-container font-4" style={{textAlign: 'center'}}>
                    I'm a Full Stack Software Engineer with a passion for NFTs, Blockchain development, and Content Creation!
                    <br/><br/>I'm definitely not an artist, but I'm pretty decent at googling things and learning on the fly! 
                </div>
                <br/>
                <div class="text-container font-4" style={{textAlign: 'center', flexDirection: 'row'}}>
                    <a href="https://www.tiktok.com/@andrewdddo" style={{fontSize: '2rem', margin: '5%'}}>
                        <Icon icon="logos:tiktok-icon" class='text-container-icons' />
                    </a>
                    <a href="https://www.youtube.com/channel/UCLPAUfytUgzLdPZqCo_xPiA" style={{fontSize: '2rem', margin: '5%'}}>
                        <Icon icon="logos:youtube-icon" />
                    </a>
                    <a href="https://twitter.com/andrewdddo" style={{fontSize: '2rem', margin: '5%'}}>
                        <Icon icon="logos:twitter" />
                    </a>
                    <a href="https://www.instagram.com/andrewdddo/" style={{fontSize: '2rem', margin: '5%' }}>
                        <Icon icon="logos:instagram-icon" />
                    </a>
                </div>
                    
        
            
                <div class="video-container">
                    <ReactPlayer 
                    url='https://youtube.com/playlist?list=PLCObjQdJ3bqBxxSvNwRDfzbx2dnQ5vyGf'
                    width={'100%'}
                    />
                </div>
                    
                <div class="text-container font-4" style={{textAlign: 'center'}}>
                    My goal is to create a community of learners, builders and developer enthusiasts that wish to grow alongside one another. 
                    <br/><br/>This NFT project started out as an experiement, a means for TikTok content... however, now it's evolved into an idea for long-term growth and development.
                    <br/><br/>Join us on our mission to create an NFT project and learn how to do it yourself!
                </div>
          </div>


            </Hidden>
            
        </div>
    </div>
  );
}

export default Mission;