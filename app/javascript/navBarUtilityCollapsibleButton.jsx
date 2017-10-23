
import React, { Component } from "react";

class NavbarUtilityCollapsibleButton extends Component {

  render() {
    return (
      <button key={0} type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
      </button>
    );
  }
}

export default NavbarUtilityCollapsibleButton


