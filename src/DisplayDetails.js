import React, { Component } from "react";
import { MainContext } from "./MainContext";

export default class DisplayDetails extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  render() {
    return (
      <div>
        <h1>{this.context.user.username || "No username yet"}</h1>
      </div>
    );
  }
}
