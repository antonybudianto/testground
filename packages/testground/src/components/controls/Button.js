import React from 'react';
import classNames from 'classnames';

const Button = props => {
  const { title, onClick, style, disabled } = props;
  const sharedProps = { title, onClick, style, disabled };
  return (
    <button
      {...sharedProps}
      className={classNames('main-box__btn', props.className, {
        'main-box__btn--icon': props.icon,
        'main-box__btn--active': props.active,
        'main-box__btn--sm': props.sm,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
