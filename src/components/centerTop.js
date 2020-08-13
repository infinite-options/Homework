import React, { Component } from "react";
import Icons from "./icons";
import icons from "./data/iconData";
export class CenterTop extends Component {
  render() {
    const IconOutput = icons.map((icon) => (
      <Icons imgSrc={icon.imgSrc} name={icon.name} />
    ));
    return (
      <div>
        <div className='iconsArray'>{IconOutput}</div>
        <div className='quote'>
          <p>
            The rules for recipie writing are pretty intuitive and
            straightforward. Yet, if you can leave a cook confused, hopeless,
            and with a batch of inedible food. Likely, you've tried to follow a
            poorly written recipie, and you know just how frustrating it can be.
            Try how frustrating it can be. Try my steps for recipies worthy of a
            best-selling cookbook author.
          </p>
        </div>
      </div>
    );
  }
}

export default CenterTop;
