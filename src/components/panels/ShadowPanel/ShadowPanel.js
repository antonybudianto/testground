import React, { Component } from 'react';

import ColorPicker from '../../controls/ColorPicker';
import BasicPanel from '../BasicPanel';
import './ShadowPanel.css';

export class ShadowPanel extends Component {
  constructor(props) {
    super(props);

    console.log(props.element.style);

    this.state = {
      shadowProp: {
        hOffset: '',
        vOffset: '',
        blur: '',
        spread: '',
        color: '',
      },
    };

    this.handleShadowProp = this.handleShadowProp.bind(this);
    this.rebuildBoxShadow = this.rebuildBoxShadow.bind(this);
  }

  handleShadowProp(key, val) {
    this.setState(
      {
        shadowProp: {
          ...this.state.shadowProp,
          [key]: val,
        },
      },
      () => {
        this.rebuildBoxShadow();
      }
    );
  }

  rebuildBoxShadow() {
    const shadowSeg = this.state.shadowProp;
    const shadowStr = `${shadowSeg.hOffset} ${shadowSeg.vOffset} ${
      shadowSeg.blur
    } ${shadowSeg.spread} ${shadowSeg.color}`;
    this.props.element.style.boxShadow = shadowStr;
  }

  render() {
    return (
      <BasicPanel title="SHADOW">
        <strong className="basic-panel__subtitle mb1">Custom</strong>
        <div className="flex items-center">
          <div className="basic-box">
            <label htmlFor="hOffset">Horizontal</label>
            <input
              type="text"
              value={this.state.shadowProp.hOffset}
              onChange={e => this.handleShadowProp('hOffset', e.target.value)}
              className="ml1 shadow-panel__input"
            />
          </div>
          <div className="basic-box">
            <label htmlFor="vOffset">Vertical</label>
            <input
              type="text"
              value={this.state.shadowProp.vOffset}
              onChange={e => this.handleShadowProp('vOffset', e.target.value)}
              className="ml1 shadow-panel__input"
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="basic-box flex-auto">
            <label htmlFor="blur">Blur</label>
            <input
              type="text"
              value={this.state.shadowProp.blur}
              onChange={e => this.handleShadowProp('blur', e.target.value)}
              className="ml1 shadow-panel__input"
            />
          </div>
          <div className="basic-box">
            <label htmlFor="spread">Spread</label>
            <input
              type="text"
              value={this.state.shadowProp.spread}
              onChange={e => this.handleShadowProp('spread', e.target.value)}
              className="ml1 shadow-panel__input"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="basic-box flex items-center">
            <label htmlFor="color">Color</label>
            <ColorPicker
              className="ml1"
              color={this.state.shadowProp.color}
              onColorChange={val => this.handleShadowProp('color', val)}
            />
          </div>
        </div>
      </BasicPanel>
    );
  }
}
