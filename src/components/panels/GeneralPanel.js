import React, { Component } from 'react'
import BasicPanel from './BasicPanel'

import Button from '../controls/Button'
import 'font-awesome/css/font-awesome.css'
import './GeneralPanel.css'

class GeneralPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        fontSize: props.element.style.fontSize,
        fontWeight: props.element.style.fontWeight,
        fontStyle: props.element.style.fontStyle,
        textAlign: props.element.style.textAlign,
        textDecoration: props.element.style.textDecoration
      }
    }

    this.setAlign = this.setAlign.bind(this)
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this)
    this.handleChangeStyle = this.handleChangeStyle.bind(this)
  }

  componentDidMount () {
    // console.log(this.props.element)
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
          <Button onClick={() => this.handleChangeStyle('fontWeight', 'bold')}
              active={style.fontWeight === 'bold'}>
            <i className="fas fa-bold"></i>
          </Button>
          <Button onClick={() => this.handleChangeStyle('fontStyle', 'italic')}
              active={style.fontStyle === 'italic'}>
            <i className="fas fa-italic"></i>
          </Button>
          <Button onClick={() => this.handleChangeStyle('textDecoration', 'underline')}
              active={style.textDecoration === 'underline'}>
            <i className="fas fa-underline"></i>
          </Button>
          <Button onClick={() => this.handleChangeStyle('textDecoration', 'line-through')}
              active={style.textDecoration === 'line-through'}>
            <i className="fas fa-strikethrough"></i>
          </Button>
          <Button onClick={() => this.handleChangeStyle('textAlign', 'left')}
              active={style.textAlign === 'left'}>
            <i className="fas fa-align-left"></i>
          </Button>
          <Button onClick={() => this.handleChangeStyle('textAlign', 'center')}
              active={style.textAlign === 'center'}>
            <i className="fas fa-align-center"></i>
          </Button>
          <Button onClick={() => this.handleChangeStyle('textAlign', 'right')}
              active={style.textAlign === 'right'}>
            <i className="fas fa-align-right"></i>
          </Button>
          <Button onClick={() => this.handleChangeStyle('textAlign', 'justify')}
              active={style.textAlign === 'justify'}>
            <i className="fas fa-align-justify"></i>
          </Button>
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
