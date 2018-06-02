import React, { Component } from 'react';
import ColorPicker from '../../../controls/ColorPicker';

class BoxSubpanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        backgroundColor: props.element.style.backgroundColor,
      },
    };

    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(val) {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: val,
      },
    });
    this.props.element.style.backgroundColor = val;
  }

  render() {
    const { element } = this.props;
    const style = element.style;
    return (
      <div className="mt1 flex flex-column">
        <strong className="basic-panel__subtitle">Element</strong>
        <div className="flex items-center">
          <div className="basic-box">
            Size: &nbsp;
            <input
              type="text"
              placeholder="W"
              value={style.fontSize}
              onChange={this.handleFontSizeChange}
              style={{ width: 20 }}
              className="general-panel__input"
            />
            <input
              type="text"
              placeholder="H"
              value={style.fontSize}
              onChange={this.handleFontSizeChange}
              style={{ width: 20 }}
              className="general-panel__input"
            />
          </div>
          <ColorPicker
            onColorChange={this.handleColorChange}
            color={this.state.style.backgroundColor}
          />
        </div>
      </div>
    );
  }
}

export default BoxSubpanel;
