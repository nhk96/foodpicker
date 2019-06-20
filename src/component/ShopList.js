import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import Shop from "./Shop.js";

class ShopList extends Component {
  render() {
    const { restaurant } = this.props;
    return Shop.map((shop, i) => {
      const position = [shop.lat, shop.lng];
      let display = restaurant === i;
      return (
        <Marker key={i} position={position} opacity={display ? 1 : 0}>
          {/*Temporary show the popup even not selected. */}
          <Popup className={display ? "show" : "show"}>{shop.name}</Popup>
        </Marker>
      );
    });
  }
}

export default ShopList;
