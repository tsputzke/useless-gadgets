import React from 'react';

class App extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = '#f00'
    ctx.fillRect(20, 20, 100, 100);
  }
  
  render() {
    return (
      <main className='App'>
        <canvas ref='canvas'>
  
        </canvas>
      </main>
    )
  }
}

export default App;