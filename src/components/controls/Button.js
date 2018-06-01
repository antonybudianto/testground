import React from 'react';
import Classnames from 'classnames';

const Button = props => (
  <button
    onClick={props.onClick}
    style={props.style}
    className={Classnames('main-box__btn main-box__btn--icon', {
      'main-box__btn--active': props.active,
    })}
  >
    {props.children}
  </button>
);

export default Button;
