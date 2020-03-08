import React from "react";
import { connect } from "react-redux";

function Computer(props) {
  return (
    <div>
      <h2>Computer</h2>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    playerNumbers: state.playerNumbers,
    lotteryNumbers: state.lotteryNumbers
  };
}

export default connect(mapStateToProps)(Computer);
