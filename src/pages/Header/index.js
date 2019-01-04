import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import Logo from "../../components/Logo";

export default class Header extends Component {
  render() {
    return (
      <div className="container header">
        <div className="row">
          <div className="col-xs-6 start-xs">
            <Logo />
          </div>
          <div className="col-xs-6 end-xs">
            <Navigation {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
