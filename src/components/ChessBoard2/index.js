import React, { Component } from "react";

import Stockfish from "stockfish.js";

class ChessBoard2 extends Component {
  render() {
    return (
      <div>
        <div style={boardsContainer}>
          <Stockfish />
        </div>
      </div>
    );
  }
}

export default ChessBoard2;

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100vw",
  marginTop: 30,
  marginBottom: 50
};
