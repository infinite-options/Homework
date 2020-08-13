import React, { Component } from "react";
import DirectionsList from "./directionsList";
import directionsData from "./data/directions";
export class RightPanel extends Component {
  render() {
    const directionItems = directionsData.map((data) => (
      <DirectionsList
        imgSrc={data.imgSrc}
        time={data.time}
        action={data.action}
        desc={data.desc}
      />
    ));
    return (
      <div className='RightPanel'>
        <h2>DIRECTIONS</h2>
        {directionItems}
      </div>
    );
  }
}

export default RightPanel;
