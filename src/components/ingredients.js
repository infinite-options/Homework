import React, { Component } from "react";
import menudata from "./data/menudata";
import MenuItems from "./menuItems";

export class Ingredients extends Component {
  render() {
    const menu = menudata.map((menuitem) => (
      <MenuItems
        title={menuitem.title}
        note={menuitem.note}
        qty={menuitem.qty}
      />
    ));
    return (
      <div className='ingredients'>
        <h2>INGREDIENTS</h2>
        <div className='displayMenu'>
          <div className='menuLeft'>{menu}</div>
          <div className='menuRight'>{menu}</div>
        </div>
      </div>
    );
  }
}

export default Ingredients;
