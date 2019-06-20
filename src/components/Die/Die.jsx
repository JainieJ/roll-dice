import React from "react";
import "./Die.css";
import * as converter from "number-to-words";

const Die = ({ num, isRolling }) => {
  const value = converter.toWords(num);
  const rolling = isRolling ? "animated wobble" : "";
  const dice = `fas fa-dice-${value} fa-10x ${rolling}`;
  return (
    <div className="Die">
      <i className={dice} />
    </div>
  );
};

export default Die;
