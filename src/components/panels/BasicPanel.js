import React, { Component } from 'react'
import './BasicPanel.css'

class BasicPanel extends Component {
  render () {
    return (
      <div className="basic-panel">
        <div className="basic-panel__title">{this.props.title}</div>
        {this.props.children}
      </div>
    )
  }
}

export default BasicPanel
