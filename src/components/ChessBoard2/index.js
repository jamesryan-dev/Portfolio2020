import ChessboardJs from 'react-chessboardjs-wrapper'

<ChessboardJs
  animate // boolean, chessboard.js piece animations
  blackSquareColour="steelblue" // or hex
  border="10px solid #d3d3d3" // css border property
  config={config} // The chessboard.js config object
  onInitBoard={(board, boardId) => this._board = board} // callback fn, gets passed the chessboard.js board object, and the unique id
  resize // effective if width prop is a string
  showPromotionDialog={ // falsey, or object as shown
    onSelect: piece => { // callback function, runs when a piece is selected
      console.log(piece)
      this.setState({
        showPromotionDialog: false,
      })
    },
    square: 'e8', // the square the select piece dialog appears on
  }
  whiteSquareColour="aliceblue" // or hex
  width="80%" // string (%) || number (px)
/>
