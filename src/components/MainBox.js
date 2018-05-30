import React, { Component } from 'react'
import Draggable from 'react-draggable';
import './MainBox.css'

import GeneralPanel from './panels/GeneralPanel'

class MainBox extends Component {
  render () {
    const { element } = this.props
    const elementTitle = element ?
      `<${element.localName}> ${element.className}` : 'React Inline Studio'

    return (
      <Draggable handle=".main-box__title"
        defaultPosition={{x: 50, y: 25}}>
        <div className="main-box">
          <div className="main-box__title">{ elementTitle }</div>
          {
            element ? (
              <div>
                <GeneralPanel element={element} />
              </div>
            ) : (
              <div style={{
                padding: '5px'
              }}>
                Let's start by selecting element!
              </div>
            )
          }
          <div style={{
            padding: '5px'
          }}>
            <button onClick={this.props.onSelect}>
              {this.props.selecting ? 'Selecting...' : 'Select'}</button>
          </div>
        </div>
      </Draggable>
    )
  }
}

export default MainBox
