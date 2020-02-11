import React from 'react';
import Paddle from './paddle';

class Breakout extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    let ctx = this.refs.canvas.getContext('2d');

    const GAME_WIDTH = 800;
    const GAME_HEIGHT = 600;
    // ctx.clearRect(0, 0, 800, 600);
    let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)

    paddle.draw(ctx);
  }

  render() {
    return (
      <div>
        <canvas ref='canvas' width='800' height='600'></canvas>
      </div>
    )
  }
}

export default Breakout;