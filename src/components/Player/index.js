import React, { useState } from "react";
import { connect } from "react-redux";

function Player(props) {
  const [userInput, setUserInput] = useState([]);

  function handleChange(e) {
    setUserInput({
      ...userInput,
      [e.target.name]: [e.target.value]
    });
    console.log(userInput);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h2>Player</h2>
      <form onSubmit={handleSubmit}>
        {props.lotteryNumbers.map((num, index) => (
          <input
            key={index}
            name={`input-${index}`}
            id={`input-${index}`}
            type="number"
            placeholder={index + 1}
            value={userInput[index]}
            onChange={handleChange}
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
