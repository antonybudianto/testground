import React, { Component } from 'react'
import BasicPanel from './BasicPanel'

import 'font-awesome/css/font-awesome.css'
import './GeneralPanel.css'

class GeneralPanel extends Component {
  constructor(props) {
    super(props)

    this.setAlign = this.setAlign.bind(this)
  }
  componentDidMount () {
    console.log(this.props.element)
  }
  setAlign (align) {
    console.log(align, this.props.element)
    this.props.element.style.textAlign = align
  }
  render () {
    return (
      <BasicPanel title="GENERAL">
        <div>
          <button onClick={() => this.setAlign('left')} className="general-panel-icon">
            <i className="fas fa-align-left"></i>
          </button>
          <button onClick={() => this.setAlign('center')} className="general-panel-icon">
            <i className="fas fa-align-center"></i>
          </button>
          <button onClick={() => this.setAlign('right')} className="general-panel-icon">
            <i className="fas fa-align-right"></i>
          </button>
        </div>
      </BasicPanel>
    )
  }
}

export default GeneralPanel
