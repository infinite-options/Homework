import React, { Component } from "react";

export class NutritionalTable extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.item}</td>
          <td>{this.props.quantity}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default NutritionalTable;
