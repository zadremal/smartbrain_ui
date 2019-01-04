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
    isUserAuthenticated: false,
    currentUser: {}
  };

  onSingIn = data => {
    this.setState({ isUserAuthenticated: true, currentUser: data });
  };

  onSingOut = () => {
    this.setState({ isUserAuthenticated: false });
  };

  onRegister = data => {
    this.setState({ isUserAuthenticated: true, currentUser: data });
  };

  onRankUpdate = entries => {
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        entries: entries
      }
    }));
  };

  render() {
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
            <Route
              exact
              path="/"
              render={() =>
                this.state.isUserAuthenticated ? (
                  <Mainscreen
                    currentUser={this.state.currentUser}
                    onRankUpdate={this.onRankUpdate}
                  />
                ) : (
                  <Redirect to="/singin" />
                )
              }
            />
          </span>
        </Router>
      </div>
    );
  }
}

export default App;
