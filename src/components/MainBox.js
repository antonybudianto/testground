import React, { Component } from 'react'
import Draggable from 'react-draggable';
import './MainBox.css'

import GeneralPanel from './panels/GeneralPanel'

class MainBox extends Component {
  render () {
    const { element } = this.props
    if (element === null) {
      return null
    }
    return (
      <Draggable>
        <div className="main-box">
          <div className="main-box-title">{ element.className }</div>
          <div>
            <GeneralPanel element={element} />
          </div>
        </div>
      </Draggable>
    )
  }
}

export default MainBox
