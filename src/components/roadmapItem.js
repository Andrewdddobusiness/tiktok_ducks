import React from 'react';
import './styles.css';

import Hidden from "@material-ui/core/Hidden";

function RoadmapItem(props) {
  return (
    <div class='roadmap-content-box'>
      <Hidden mdDown>
        <div class="font-3 roadmap-title">
          {props.data["title"]}
        </div>
        <div class="font-4 roadmap-content" >
          {props.data["content"]}
        </div>
      </Hidden>

      <Hidden smDown mdUp>
        <div class="font-3 roadmap-title" style={{textAlign: 'center'}}>
          {props.data["title"]}
        </div>
        <div class="font-4 roadmap-content" style={{textAlign: 'center'}}>
          {props.data["content"]}
        </div>
      </Hidden>

      <Hidden smUp>
        <div class="font-4 roadmap-title" style={{textAlign: 'center'}}>
          {props.data["title"]}
        </div>
        <div class="font-5 roadmap-content" style={{textAlign: 'center'}}>
          {props.data["content"]}
        </div>
      </Hidden>
    </div>

  );
}

export default RoadmapItem;