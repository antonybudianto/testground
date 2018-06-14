import React, { Component } from 'react';

const KEY_CODE = {
  UP: 38,
  DOWN: 40,
};

export class Input extends Component {
  static defaultProps = {
    defaultUnit: 'px',
    unitless: false,
    stepSize: 1,
  };

  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if ([KEY_CODE.UP, KEY_CODE.DOWN].indexOf(e.keyCode) === -1) {
      return;
    }

    e.preventDefault();
    let val = this.props.value ? parseFloat(this.props.value) : 0;
    if (isNaN(val)) {
      return;
    }
    const add = e.keyCode === KEY_CODE.UP ? 1 : -1;
    const addTmp = add * this.props.stepSize;
    const total = +(val + addTmp).toFixed(12);
    let unit = '';
    if (!this.props.unitless) {
      unit = this.props.value.replace(val, '') || this.props.defaultUnit;
    }
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
