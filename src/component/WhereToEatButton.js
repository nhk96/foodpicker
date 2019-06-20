import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ShopList from "./ShopList.js";
import Shop from "./Shop.js";

class WhereToEat extends Component {
  state = {
    result: null
  };
  constructor(props) {
    super(props);
    this.generateResult = this.generateResult.bind(this);
  }
  generateResult() {
    var result = Math.floor(Math.random() * Shop.length);
    this.setState({
      result: result
    });
  }
  render() {
    return (
      <div id="buttonContainer">
        <Button
          className="WhereToEat"
          size="large"
          color="primary"
          variant="contained"
          onClick={this.generateResult}
        >
          WHERE SHOULD WE GO EAT?
        </Button>
        <ShopList restaurant={this.state.result} />
      </div>
    );
  }
}

export default WhereToEat;
