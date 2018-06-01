import React, { Component } from 'react';
import { ChromePicker } from 'react-color';

import './ColorPicker.css';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPicker: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleClick() {
    this.setState({
      showPicker: !this.state.showPicker,
    });
  }

  handleColorChange(data) {
    let val = data.hex;
    if (data.source === 'rgb') {
      val = `rgba(${data.rgb.r},${data.rgb.g},${data.rgb.b},${data.rgb.a})`;
    } else if (data.source === 'hsl') {
      val = `hsla(${data.hsl.h},${data.hsl.s * 100}%,${data.hsl.l * 100}%,${
        data.hsl.a
      })`;
    }
    this.props.onColorChange(val);
  }

  render() {
    return (
      <div>
        <div
          onClick={this.handleClick}
          className="color-picker"
          style={{
            backgroundColor: this.props.color,
          }}
        />
        {this.state.showPicker && (
          <div style={{ position: 'absolute' }}>
            <ChromePicker
              color={this.props.color}
              onChangeComplete={this.handleColorChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ColorPicker;
