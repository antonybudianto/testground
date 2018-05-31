import React, { Component } from 'react'

import { string as styleToString } from 'to-style'
import Clipboard from 'react-clipboard.js'

class SourceView extends Component {
  render () {
    const { element } = this.props
    const style = Object.entries(element.style).filter(a => a[1] && isNaN(a[0]))
    .reduce((prev, curr) => {
      return {
        ...prev,
        [curr[0]]: curr[1]
      }
    }, {})
    const display = JSON.stringify(style, null, 2)
    let displayCss = styleToString(style).replace(/; /g, '; \n')
    displayCss = displayCss ? displayCss + ';' : ''
    return (
      <div style={{
        padding: '5px'
      }}>
        <strong className="basic-panel__subtitle">OBJECT</strong> &nbsp;
        <Clipboard data-clipboard-text={display}>
          <i className="fas fa-clipboard"></i>
        </Clipboard>
        <pre>{display}</pre>

        <strong className="basic-panel__subtitle">CSS</strong> &nbsp;
        <Clipboard data-clipboard-text={displayCss}>
          <i className="fas fa-clipboard"></i>
        </Clipboard>
        <pre>{displayCss}</pre>
      </div>
    )
  }
}

export default SourceView