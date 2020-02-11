import React from 'react'

class InputHandler extends React.Component {
  constructor(paddle) {
    super(paddle);
    document.addEventListener('keydown', event => {
      switch(event.keyCode) {
        case 37:
          paddle.moveLeft()
          break;

        case 39:
          paddle.moveRight()
          break;

        default:
          alert('default text')
      }
    });
  }

}

export default InputHandler;