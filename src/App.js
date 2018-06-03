import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InlineStudio from './components/InlineStudio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div
          style={{
            margin: '10px',
            padding: '20px',
            backgroundColor: 'orange',
          }}
        >
          Hello
        </div>
        <div>
          <input type="text" placeholder="Please input your name" />
        </div>
        <InlineStudio
          plugins={[
            {
              id: 'custom',
              menu: {
                menuName: 'Custom',
                menuIcon: 'fa-book',
              },
              panel: {
                component: () => <div>Custom!</div>,
              },
            },
          ]}
        />
      </div>
    );
  }
}

export default App;
