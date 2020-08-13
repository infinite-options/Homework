import React, { Component } from "react";

export class MenuItems extends Component {
  render() {
    return (
      <div>
        <div className='menuItems'>
          <ul>
            <li>{this.props.title}</li>
            <li>{this.props.qty}</li>
          </ul>
        </div>
        <div className='menuDetails'>
          <p>{this.props.note}</p>
        </div>
      </div>
    );
  }
}

export default MenuItems;
