import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import WhereToEat from "./component/WhereToEatButton.js";

class App extends Component {
  state = {
    lat: "",
    lng: ""
  };

  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        return this.setState({
          //lat: position.coords.latitude,
          //lng: position.coords.longitude
          lat: 3.026132,
          lng: 101.615271
        });
      });
    } else {
      alert(
        "Sorry, there are something wrong or you don't have location enabled."
      );
    }
  }
  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div className="container">
        <Map center={position} zoom={18} className="MapView">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
            minZoom={17}
          />
          <Marker position={position} className="currentLocation">
            <Popup>You're here!</Popup>
          </Marker>
          <WhereToEat />
        </Map>
      </div>
    );
  }
}

export default App;
