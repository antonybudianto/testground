import React from 'react';
import Classnames from 'classnames';

const Button = props => (
  <button
    title={props.title}
    onClick={props.onClick}
    style={props.style}
    disabled={props.disabled}
    className={Classnames('main-box__btn', props.className, {
      'main-box__btn--icon': props.icon,
      'main-box__btn--active': props.active,
    })}
  >
    {props.children}
  </button>
);

export default Button;
