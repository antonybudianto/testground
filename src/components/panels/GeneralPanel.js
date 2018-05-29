import React, { Component } from 'react'
import BasicPanel from './BasicPanel'

import 'font-awesome/css/font-awesome.css'
import './GeneralPanel.css'

class GeneralPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fontSize: props.element.style.fontSize
    }

    this.setAlign = this.setAlign.bind(this)
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this)
  }

  componentDidMount () {
    console.log(this.props.element)
  }

  setAlign (align) {
    this.props.element.style.textAlign = align
  }

  handleFontSizeChange (e) {
    e.preventDefault()
    let val = e.target.value
    this.props.element.style.fontSize = val
    this.setState({
      fontSize: val
    })
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
          <button onClick={() => this.setAlign('justify')} className="general-panel-icon">
            <i className="fas fa-align-justify"></i>
          </button>
        </div>
        <div>
          <div className="basic-box">Font size: &nbsp;
            <input type="text" value={this.state.fontSize}
              onChange={this.handleFontSizeChange}
              style={{width: 40}} className="general-panel-input" /></div>
        </div>
      </BasicPanel>
    )
  }
}

export default GeneralPanel
