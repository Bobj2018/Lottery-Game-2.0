import React from "react";
import { connect } from "react-redux";

function Player(props) {
  return (
    <div>
      <h2>Player</h2>
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
