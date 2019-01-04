import React, { Component } from "react";
import "./App.css";
import "flexboxgrid2";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Mainscreen from "./pages/Mainscreen/";
import Header from "./pages/Header/";
import SingIn from "./components/SingIn";
import Register from "./components/Register";
import Background from "./components/Background";

class App extends Component {
  state = {
    isUserAuthenticated: false
  };

  onSingIn = () => {
    this.setState({ isUserAuthenticated: true });
  };

  onSingOut = () => {
    this.setState({ isUserAuthenticated: false });
  };

  onRegister = () => {
    this.setState({ isUserAuthenticated: true });
  };

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={props =>
            this.state.isUserAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect to="/singin" />
            )
          }
        />
      );
    };

    return (
      <div className="app">
        <Background />
        <Router>
          <span>
            <Header
              onSingOut={this.onSingOut}
              isUserAuthenticated={this.state.isUserAuthenticated}
            />
            <Route
              exact
              path="/singin"
              render={() => (
                <SingIn
                  isUserAuthenticated={this.state.isUserAuthenticated}
                  onSingin={this.onSingIn}
                />
              )}
            />
            <Route
              exact
              path="/register"
              render={() => (
                <Register
                  isUserAuthenticated={this.state.isUserAuthenticated}
                  onRegister={this.onRegister}
                />
              )}
            />
            <PrivateRoute exact path="/" component={Mainscreen} />
          </span>
        </Router>
      </div>
    );
  }
}

export default App;
