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

    document.addEventListener('keyup', event => {
      switch(event.keyCode) {
        case 37:
          if(paddle.speed < 0) paddle.stop();

          break;

        case 39:
          if(paddle.speed > 0 ) paddle.stop();

          break;

        default:
          alert('default text')
      }
    });
  }

}

export default InputHandler;