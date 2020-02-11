import React from 'react';
import Paddle from './paddle';
import InputHandler from './input';

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

    new InputHandler(paddle);

    let lastTime = 0;

    function gameLoop(timestamp) {
      let deltaTime = timestamp - lastTime;
      lastTime = timestamp

      ctx.clearRect(0, 0, 800, 600);
      paddle.update(deltaTime);
      paddle.draw(ctx);

      requestAnimationFrame(gameLoop);
    }

    gameLoop();
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