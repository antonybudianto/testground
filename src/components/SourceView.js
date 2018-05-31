import React, { Component } from 'react'

class SourceView extends Component {
  render () {
    const { element } = this.props
    console.log(element.style)
    const arr = Object.entries(element.style).filter(a => a[1] && isNaN(a[0]))
    console.log(arr)
    return (
      <div style={{
        padding: '5px'
      }}>
        <strong className="basic-panel__subtitle">SOURCE</strong>
        <p>
          
        </p>
      </div>
    )
  }
}

export default SourceView