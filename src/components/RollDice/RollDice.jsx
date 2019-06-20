import React, { Component } from "react";
import Die from "../Die/Die";
import "./RollDice.css";

class RollDice extends Component {
  state = {
    value1: 1,
    value2: 6,
    isRolling: false
  };
  handleClick = e => {
    const value1 = Math.floor(Math.random() * 6) + 1;
    const value2 = Math.floor(Math.random() * 6) + 1;
    function stopAnimation() {
      this.setState({ isRolling: false });
    }
    this.setState({ value1, value2, isRolling: true }, () => {
      setTimeout(stopAnimation.bind(this), 1000);
    });
  };
  render() {
    const { value1, value2, isRolling } = this.state;
    return (
      <div className="RollDice">
        <Die num={value1} isRolling={isRolling} />
        <Die num={value2} isRolling={isRolling} />
        <div className="RollDice-btn" onClick={this.handleClick}>
          Roll Dice!
        </div>
      </div>
    );
  }
}

export default RollDice;
