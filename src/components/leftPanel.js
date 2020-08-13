import React, { Component } from "react";

export class LeftPanel extends Component {
  render() {
    return (
      <div className='leftPanel'>
        <h1>Healthy Greens</h1>
        <p id='top'>
          2312 NE Virtual Dr, San Jose, California | Contact: 000-000-0000{" "}
        </p>
        <p id='bottom'>Email: healthy.greens@gmail.com</p>
      </div>
    );
  }
}

export default LeftPanel;
