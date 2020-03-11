import React, { useState } from "react";
import { connect } from "react-redux";

function Player(props) {
  const [userInput, setUserInput] = useState({});

  function handleChange(e) {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userInput);
  }

  return (
    <div>
      <h2>Player</h2>
      <form onSubmit={handleSubmit}>
        {props.lotteryNumbers.map((num, index) => (
          <input
            key={index}
            name={`${index}`}
            id={`${index}`}
            type="number"
            placeholder={props.lotteryNumbers[index]}
            value={userInput[index]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    playerNumbers: state.playerNumbers,
    lotteryNumbers: state.lotteryNumbers
  };
}

export default connect(mapStateToProps)(Player);
