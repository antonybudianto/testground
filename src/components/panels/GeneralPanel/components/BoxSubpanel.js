import React, { Component } from 'react';
import ColorPicker from '../../../controls/ColorPicker';

import { handleChangeStyle } from '../../../../util/change-style';

class BoxSubpanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        margin: props.element.style.margin,
        padding: props.element.style.padding,
        width: props.element.style.width,
        height: props.element.style.height,
        backgroundColor: props.element.style.backgroundColor,
      },
    };
  }

  render() {
    // const { element } = this.props;
    return (
      <div className="mt1 flex flex-column">
        <strong className="basic-panel__subtitle">Element</strong>
        <div className="flex items-stretch">
          <div className="basic-box p1">
            Size: &nbsp;
            <input
              type="text"
              placeholder="W"
              value={this.state.style.width}
              onChange={e =>
                this.setState(handleChangeStyle('width', e.target.value))
              }
              style={{ width: 35 }}
              className="general-panel__input"
            />
            <input
              type="text"
              placeholder="H"
              value={this.state.style.height}
              onChange={e =>
                this.setState(handleChangeStyle('height', e.target.value))
              }
              style={{ width: 35 }}
              className="general-panel__input"
            />
          </div>
          <div className="basic-box p1">
            <ColorPicker
              onColorChange={val => {
                this.setState(handleChangeStyle('backgroundColor', val, false));
              }}
              color={this.state.style.backgroundColor || ''}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="basic-box p1">
            Margin: &nbsp;
            <input
              type="text"
              placeholder="All"
              value={this.state.style.margin}
              onChange={e =>
                this.setState(handleChangeStyle('margin', e.target.value))
              }
              style={{ width: 35 }}
              className="general-panel__input"
            />
          </div>
          <div className="basic-box p1">
            Padding: &nbsp;
            <input
              type="text"
              placeholder="All"
              value={this.state.style.padding}
              onChange={e =>
                this.setState(handleChangeStyle('padding', e.target.value))
              }
              style={{ width: 35 }}
              className="general-panel__input"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BoxSubpanel;
