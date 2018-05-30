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
      element: null
    }

    this.onSelect = this.onSelect.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  onClick(el){
    this.setState({
      element: el
    })
  }
  onSelect() {
    this.setState({
      element: null
    }, () => {
      elementPicker.init({ onClick: this.onClick })
    })
  }
  render () {
    return (
      <div>
        <MainBox onSelect={this.onSelect}
          element={this.state.element} />
      </div>
    )
  }
}

export default InlineStudio
