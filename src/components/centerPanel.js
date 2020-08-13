import React, { Component } from "react";
import CenterTop from "./centerTop";
import Ingredients from "./ingredients";
import Nutritional from "./nutritional";
export class CenterPanel extends Component {
  render() {
    return (
      <div className='centerPanel'>
        <CenterTop />
        <Ingredients />
        <Nutritional />
      </div>
    );
  }
}

export default CenterPanel;
