import React, { Component } from "react";
import { MainContext } from "./MainContext";

export default class UserDetails extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }
  changeUsername = e => {
    this.setState({ username: e.target.value });
  };

  saveUsername = () => {
    this.context.setUser(this.state.username);
  };

  render() {
    return (
      <div>
        <input onChange={this.changeUsername} />
        <button onClick={this.saveUsername}>Set username</button>
      </div>
    );
  }
}
