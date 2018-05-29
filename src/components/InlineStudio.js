import React, { Component } from 'react'
import elementPicker from 'element-picker'
import MainBox from './MainBox'

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(solid)

class InlineStudio extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showBox: false,
      element: null
    }

    this.onSelect = this.onSelect.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  onClick(el){
    this.setState({
      showBox: true,
      element: el
    })
  }
  onSelect() {
    this.setState({
      showBox: false,
      element: null
    }, () => {
      elementPicker.init({ onClick: this.onClick })
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.onSelect}>Select!</button>
        {
          this.state.showBox && <MainBox element={this.state.element} />
        }
      </div>
    )
  }
}

export default InlineStudio
