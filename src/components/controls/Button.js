import React from 'react';
import classNames from 'classnames';

const Button = props => (
  <button
    title={props.title}
    onClick={props.onClick}
    style={props.style}
    disabled={props.disabled}
    className={classNames('main-box__btn', props.className, {
      'main-box__btn--icon': props.icon,
      'main-box__btn--active': props.active,
      'main-box__btn--sm': props.sm,
    })}
  >
    {props.children}
  </button>
);

export default Button;
