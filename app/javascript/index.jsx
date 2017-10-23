import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import dashboardView from "./dashBoardView/dashboardView.jsx";
import listView from "./listView/listView.jsx";
import emptyStateView from "./emptyStateView/emptyStateView.jsx";

import NavBar from "./pf-lib/navBar/components/NavBar.jsx";
import NavbarUtilityDropDown from "./navbarUtilityDropDown.jsx";
import NavbarUtilityCollapsibleButton from "./navBarUtilityCollapsibleButton.jsx";

import { navbarConfig } from "./configs.js"

class App extends Component {
  render() {

    let navUtility = [<NavbarUtilityCollapsibleButton key='1'/>, <NavbarUtilityDropDown  key='2'/>];
    return (
      <Router>
        <div className="app">
          <NavBar config={navbarConfig} customUtility={navUtility}/>
          <Switch>
            <Route exact path={"/"} component={dashboardView}/>
          </Switch>
          <Switch>
            <Route exact path={"/listview"} component={listView}/>
          </Switch>
          <Switch>
            <Route exact path={"/emptyState"} component={emptyStateView}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
