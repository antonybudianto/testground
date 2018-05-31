import React, { Component } from 'react'
import Classnames from 'classnames'
import BasicPanel from './BasicPanel'

import 'font-awesome/css/font-awesome.css'
import './GeneralPanel.css'

class GeneralPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        fontSize: props.element.style.fontSize,
        fontWeight: props.element.style.fontWeight,
        fontStyle: props.element.style.fontStyle
      }
    }

    this.setAlign = this.setAlign.bind(this)
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this)
    this.handleChangeStyle = this.handleChangeStyle.bind(this)
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
      style: {
        ...this.state.style,
        fontSize: val
      }
    })
  }

  handleChangeStyle (field, val) {
    let finalVal = val
    if (this.state.style[field] === val) {
      finalVal = null
    }
    this.setState({
      style: {
        ...this.state.style,
      [field]: finalVal
      }
    })
    this.props.element.style[field] = finalVal
  }

  render () {
    const { style } = this.state
    return (
      <BasicPanel title="GENERAL">
        <strong className="basic-panel__subtitle">Text</strong>
        <div>
          <button onClick={() => this.handleChangeStyle('fontWeight', 'bold')}
            className={Classnames("general-panel-icon", {
              'general-panel-icon--active': style.fontWeight === 'bold'
            })}>
            <i className="fas fa-bold"></i>
          </button>
          <button onClick={() => this.handleChangeStyle('fontStyle', 'italic')}
            className={Classnames("general-panel-icon", {
              'general-panel-icon--active': style.fontStyle === 'italic'
            })}>
            <i className="fas fa-italic"></i>
          </button>
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
            <input type="text" value={style.fontSize}
              onChange={this.handleFontSizeChange}
              style={{width: 40}} className="general-panel-input" /></div>
        </div>
      </BasicPanel>
    )
  }
}

export default GeneralPanel
