import React, { Component } from "react";
// import icons from './data/iconData'
export class Icons extends Component {
  render() {
    return (
      <div className='icon-styling'>
        <img src={this.props.imgSrc} alt={this.props.name} />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Icons;
