import React, { Component } from 'react'

import { string as styleToString } from 'to-style'

class SourceView extends Component {
  render () {
    const { element } = this.props
    console.log(element.style)
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
        <strong className="basic-panel__subtitle">OBJECT</strong>
        <pre>{display}</pre>

        <strong className="basic-panel__subtitle">CSS</strong>
        <pre>{displayCss}</pre>
      </div>
    )
  }
}

export default SourceView