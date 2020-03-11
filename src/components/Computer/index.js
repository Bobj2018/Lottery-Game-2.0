/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { updateLottery } from "../../actions";
import { connect } from "react-redux";

function Computer(props) {
  const createRandomLottery = () => {
    props.updateLottery([]);
    const randomLotto = [];

    for (let i = 0; i < 6; i++) {
      randomLotto.push(Math.floor(Math.random() * 51));
    }

    props.updateLottery(randomLotto);
  };

  useEffect(() => {
    createRandomLottery();
  }, []);

  return (
    <div>
      <h2>Computer</h2>
      <button onClick={createRandomLottery}>Generate</button>
      {props.lotteryNumbers.map((number, index) => (
        <p key={index}>{number}</p>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    playerNumbers: state.playerNumbers,
    lotteryNumbers: state.lotteryNumbers,
    isGenerating: state.isGenerating
  };
}

export default connect(mapStateToProps, { updateLottery })(Computer);
