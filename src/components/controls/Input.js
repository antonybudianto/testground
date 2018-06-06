import React, { Component } from 'react';

const KEY_CODE = {
  UP: 38,
  DOWN: 40,
};

export class Input extends Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if ([KEY_CODE.UP, KEY_CODE.DOWN].indexOf(e.keyCode) === -1) {
      return;
    }

    e.preventDefault();
    const curVal = parseFloat(this.props.value || 0);
    const add = e.keyCode === KEY_CODE.UP ? 1 : -1;
    const total = curVal + add;
    const unit = this.props.value.replace(curVal, '') || 'px';

    this.props.onChange(total + unit);
  }

  render() {
    const {
      className,
      style,
      onChange,
      placeholder,
      value,
      title,
    } = this.props;
    const sharedProps = { title, value, style, placeholder, className };
    return (
      <input
        {...sharedProps}
        type="text"
        onKeyDown={this.handleKeyDown}
        onChange={e => onChange(e.target.value)}
      />
    );
  }
}

export default Input;
