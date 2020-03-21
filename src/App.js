import React, { Component } from "react";

import "./App.css";
import { MainContext } from "./MainContext";
import UserDetails from "./UserDetails";
import DisplayDetails from "./DisplayDetails";

export default class App extends Component {
  state = {
    user: { username: "" },
    setUser: username => {
      this.setState({ user: { username: username } });
    }
  };

  render() {
    return (
      <div className="App" style={{ marginTop: "5rem" }}>
        <MainContext.Provider value={this.state}>
          <UserDetails />
          <DisplayDetails />
        </MainContext.Provider>
      </div>
    );
  }
}
