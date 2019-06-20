import React, { Component } from "react";
import Die from "../Die/Die";
import "./RollDice.css";

class RollDice extends Component {
  state = {};
  render() {
    return (
      <div className="RollDice">
        <Die />
        <Die />
        <div className="RollDice-btn">Roll Dice!</div>
      </div>
    );
  }
}

export default RollDice;
