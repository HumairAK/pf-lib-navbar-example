import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import dashboardView from "./dashBoardView/dashboardView.jsx";
import listView from "./listView/listView.jsx";
import emptyStateView from "./emptyStateView/emptyStateView.jsx";

import NavBar from "./pf-lib/navBar/components/NavBar.jsx";

class TodoApp extends Component {

  _createNavBar(){
    let navbarConfig = {
      // The different tabs and the link to where they are routed to.
      categories: [
        {title: 'Dashboard', link: '/'},
        {title: 'List View', link: '/listView'},
        {title: 'Empty State', link: '/emptyState'},
      ],
      // The title image placed at the top, above nav.
      titleSrc: {
        path: '../static/build/img/brand.svg',
        alt: 'Patternfly Demo App'
      }
    };
    return (
      <NavBar config={navbarConfig} customUtility={this._createCustomNavUtility()}/>
    )
  }

  _createCustomNavUtility(){
    const liStyle = {borderLeft: '0px'};
    return (
      [ <button key={0} type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
      </button>,
        <div key={1} className="collapse navbar-collapse navbar-collapse-1">
          <ul className="nav navbar-nav navbar-utility" >
            <li><a href="#" style={liStyle}>Status</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" style={liStyle}>
                <span className="pficon pficon-user"/>
                Brian Johnson <b className="caret"/>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">Settings</a></li>
                <li><a href="#">Another link</a></li>
                <li><a href="#">Something else here</a></li>
                <li className="divider"/>
                <li className="dropdown-submenu">
                  <a tabIndex="-1" href="#">More options</a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Another link</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li className="divider"/>
                    <li className="dropdown-header">Nav header</li>
                    <li><a href="#">Separated link</a></li>
                    <li className="divider"/>
                    <li><a href="#">One more separated link</a></li>

                    <li className="divider"/>
                    <li className="dropdown-submenu">
                      <a tabIndex="-1" href="#">More options</a>
                      <ul className="dropdown-menu">
                        <li><a href="#">test</a></li>
                      </ul>
                    </li>

                  </ul>
                </li>
                <li className="divider"/>
                <li><a href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>]
    )
  }

  render() {
    return (
      <Router>
        <div className="app">
          {this._createNavBar()}
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

ReactDOM.render(<TodoApp />, document.getElementById('root'));
