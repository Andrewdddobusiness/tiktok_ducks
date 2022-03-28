import React from 'react';
import './styles.css';

import RoadmapItem  from './roadmapItem';
import RoadmapItems from '../content/roadmapContent.json';

import Model from './3dmodel';

import Hidden from "@material-ui/core/Hidden";

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
                        <Model/>
                    </div>
                </div>
            </div>
          </Hidden>

          <Hidden xsDown lgUp>
          <div class="section-container-mobile">
                <div class='font-2'>
                  Roadmap
                </div>
                <RenderItems items={RoadmapItems} />,
                <Model/>
            </div>
          </Hidden>

          <Hidden smUp>
            <div class="section-container-mobile">
                <div class='font-2'>
                  Roadmap
                </div>
                <RenderItems items={RoadmapItems} />,
                <Model/>
            </div>
          </Hidden>
            
        </div>
  );
}

export default RoadmapList;