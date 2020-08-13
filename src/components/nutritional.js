import React, { Component } from "react";
import nutritionalData from "./data/nutritionalData";
import NutritionalTable from "./nutritionalTable";

export class Nutritional extends Component {
  render() {
    const outputData = nutritionalData.map((nutri) => (
      <NutritionalTable item={nutri.item} quantity={nutri.quantity} />
    ));
    return (
      <div className='nutritional'>
        <h3>Nutritional Fact</h3>
        <table className='nutritional-table'>{outputData}</table>
      </div>
    );
  }
}

export default Nutritional;
