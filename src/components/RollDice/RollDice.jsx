import React, { Component } from "react";
import Die from "../Die/Die";

class RollDice extends Component {
  state = {};
  render() {
    return (
      <div>
        <Die />
        <Die />
      </div>
    );
  }
}

export default RollDice;
