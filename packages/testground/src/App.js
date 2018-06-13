import React, { Component } from 'react';
import './App.css';

import { InlineStudio } from '@react-instudio/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div
          style={{
            margin: '10px',
            padding: '20px',
            boxShadow: '1px 2px',
            backgroundColor: 'orange',
          }}
        >
          Hello
        </div>
        <div>
          <input type="text" placeholder="Please input your name" />
        </div>
        <InlineStudio />
        {/* <InlineStudio
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
        /> */}
      </div>
    );
  }
}

export default App;
