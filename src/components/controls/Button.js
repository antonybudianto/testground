import React from 'react'
import Classnames from 'classnames'

const Button = (props) => (
  <button {...props}
    className={Classnames("general-panel-icon", {
      'general-panel-icon--active': props.active
    })}>
    {props.children}
  </button>
)

export default Button
