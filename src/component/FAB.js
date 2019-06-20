import React, { Component } from "react";
import { Fab } from "@material-ui/core/";
import { AddIcon } from "@material-ui/icons/Add";

class FAB extends Component {
  render() {
    return (
      <div>
        <Fab size="large" color="primary" aria-label="Add" className="FAB" />
      </div>
    );
  }
}

export default FAB;
