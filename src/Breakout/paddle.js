import React from 'react'

class Paddle extends React.Component {
  constructor(gameWidth, gameHeight) {
    super(gameWidth, gameHeight);
    this.width = 150;
    this.height = 20;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10,
    }
  }

  draw(ctx) {
    ctx.fillStyle =  '#0ff'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

}

export default Paddle;