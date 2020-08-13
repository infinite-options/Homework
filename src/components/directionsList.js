import React, { Component } from "react";

export class DirectionsList extends Component {
  render() {
    return (
      <div className='directions-list'>
        <div>
          <img src={this.props.imgSrc} alt={this.props.action} />
          <p>{this.props.time}</p>
        </div>
        <div>
          <h2>{this.props.action}</h2>
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}

export default DirectionsList;
