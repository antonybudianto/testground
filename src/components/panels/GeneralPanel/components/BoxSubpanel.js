import React, { Component } from 'react';
import ColorPicker from '../../../controls/ColorPicker';

import { handleChangeStyle } from '../../../../util/change-style';
import { Input } from '../../../controls/Input';
import Button from '../../../controls/Button';

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
          <div className="basic-box p1 flex items-center flex-auto">
            <div>Size: &nbsp;</div>
            <div className="flex justify-center items-stretch" style={{ height: '30px' }}>
              <Input
                placeholder="W"
                value={this.state.style.width}
                onChange={val =>
                  this.setState(handleChangeStyle('width', val))
                }
                style={{ width: 40 }}
                className="general-panel__input"
              />
              <i className="fas fa-times mx1" style={{ height: 'auto' }} />
              <Input
                type="text"
                placeholder="H"
                value={this.state.style.height}
                onChange={val =>
                  this.setState(handleChangeStyle('height', val))
                }
                style={{ width: 40 }}
                className="general-panel__input"
              />
            </div>
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
        <div className="flex">
          <div className="basic-box p1 flex items-center">
            <span>Margin: &nbsp;</span>
            <div className="flex items-stretch">
              <Input
                placeholder="All"
                value={this.state.style.margin}
                style={{ width: 35 }}
                onChange={val => this.setState(handleChangeStyle('margin', val))}
                className="general-panel__input"
              />
              <Button className="m0"><i className="fas fa-ellipsis-h"></i></Button>
            </div>
          </div>
          <div className="basic-box p1 flex items-center">
            <span>Padding: &nbsp;</span>
            <div className="flex items-stretch">
            <Input
              placeholder="All"
              value={this.state.style.padding}
              onChange={val => this.setState(handleChangeStyle('padding', val))}
              style={{ width: 35 }}
              className="general-panel__input"
            />
            <Button className="m0"><i className="fas fa-ellipsis-h"></i></Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxSubpanel;
