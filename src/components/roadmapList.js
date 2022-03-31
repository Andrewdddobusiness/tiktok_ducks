import React from 'react';
import './styles.css';

import RoadmapItem  from './roadmapItem';
import RoadmapItems from '../content/roadmapContent.json';

import Model from './3dmodel';

import Hidden from "@material-ui/core/Hidden";

import DuckModel from '../images/4.png'

function RenderItems(props) {
    const items = props.items;
    const listItems = items.map((item) =>
    //   <li>{item["id"]}</li>
      <RoadmapItem data={item}/>
    );
    return (
      <ul>{listItems}</ul>
    );
  }


RoadmapItems = RoadmapItems["roadmap"];

function RoadmapList() {
    return (
        <div >
          <Hidden mdDown>
            <div class="section-container">
                <div class='font-2'>
                    Roadmap
                </div>
                <div class="row">
                    <div class="column left">
                    <RenderItems items={RoadmapItems} />,
                    </div>
                    <div class="column right">
                        {/* <Model/> */}
                        <img src={DuckModel} style={{paddingLeft: '25%'}} alt="profile" height="75%" width="75%"/>
                    </div>
                </div>
            </div>
          </Hidden>

          <Hidden smDown mdUp>
          <div class="section-container-mobile">
                <div class='font-2'>
                  Roadmap
                </div>
                <RenderItems items={RoadmapItems} />,
                {/* <Model/> */}
                <img src={DuckModel} alt="profile" height="25%" width="25%"/>
            </div>
          </Hidden>

          <Hidden smUp>
            <div class="section-container-mobile">
                <div class='font-2'>
                  Roadmap
                </div>
                <RenderItems items={RoadmapItems} />,
                {/* <Model/> */}
                <img src={DuckModel} alt="profile" height="25%" width="25%"/>
            </div>
          </Hidden>
            
        </div>
  );
}

export default RoadmapList;