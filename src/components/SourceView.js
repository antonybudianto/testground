import React, { Component } from 'react'

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
    return (
      <div style={{
        padding: '5px'
      }}>
        <strong className="basic-panel__subtitle">SOURCE</strong>
        <pre>{display}</pre>
      </div>
    )
  }
}

export default SourceView