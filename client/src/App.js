import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const BASE_URL = '/screenshot.png';

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { imageUrl: BASE_URL };
  }

  componentDidMount() {
    this.enqueueImageUpdate();
  }

  enqueueImageUpdate() {
    setTimeout(() => {
      this.setState({ imageUrl: `${BASE_URL}?${Date.now()}` }, this.enqueueImageUpdate.bind(this));
    }, 3e3);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Retro Monit
        </header>

        <section>
          Section for Raspberry Pi stats (temp, uptime, etc)
        </section>

        <section>
          Section for activity monitoring
        </section>

        <section>
          Section for screenshot, potentially even the ability to trigger inputs?
          <img src={this.state.imageUrl} />
        </section>

        <section>
          Top Games this Week, e.g.
          <ol>
            <li>Super Mario World &mdash; 4hrs</li>
            <li>Zelda &mdash; 2hrs</li>
            <li>Donkey Kong Country &mdash; 2hrs</li>
          </ol>
        </section>
      </div>
    );
  }
}

export default App;
