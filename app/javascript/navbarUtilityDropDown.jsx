import React, { Component } from "react";

class NavbarUtilityDropDown extends Component {

  render() {
    const liStyle = {borderLeft: '0px'};
    return (
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
        </div>
    );
  }
}

export default NavbarUtilityDropDown