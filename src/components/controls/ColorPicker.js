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
  }

  handleClick() {
    this.setState({
      showPicker: !this.state.showPicker,
    });
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
          <ChromePicker
            color={this.props.color}
            onChangeComplete={this.props.onChangeComplete}
          />
        )}
      </div>
    );
  }
}

export default ColorPicker;
