import React, { Component } from 'react'
import { ChromePicker } from 'react-color'

class BoxSubpanel extends Component {
  render () {
    return (
      <div className="mt1">
        <strong className="basic-panel__subtitle">Element</strong>
        <div>
          <ChromePicker />
        </div>
      </div>
    )
  }
}

export default BoxSubpanel
