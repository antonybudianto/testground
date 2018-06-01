import React, { Component } from 'react'
import ColorPicker from '../../../controls/ColorPicker'

class BoxSubpanel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      style: {
        backgroundColor: props.element.style.backgroundColor
      }
    }

    this.handleColorChange = this.handleColorChange.bind(this)
  }

  handleColorChange (data) {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: data.hex
      }
    })
    this.props.element.style.backgroundColor = data.hex
  }

  render () {
    // const { element } = this.props
    return (
      <div className="mt1">
        <strong className="basic-panel__subtitle">Element</strong>
        <div>
          <ColorPicker
            onChangeComplete={this.handleColorChange}
            color={this.state.style.backgroundColor} />
        </div>
      </div>
    )
  }
}

export default BoxSubpanel
