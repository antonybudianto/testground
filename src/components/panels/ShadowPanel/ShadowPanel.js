import React, { Component } from 'react';

import ColorPicker from '../../controls/ColorPicker';
import BasicPanel from '../BasicPanel';
import Button from '../../controls/Button';
import './ShadowPanel.css';

const reg = /\s+(?!.*\))/g;

const parseShadowStr = str => {
  let shadowProp = {
    hOffset: '',
    vOffset: '',
    blur: '',
    spread: '',
    color: '',
    set: '',
  };
  const map = ['hOffset', 'vOffset', 'blur', 'spread'];

  const seg = str.split(reg);
  const numerics = seg.filter(s => /^[-+]?\d/.test(s));
  const restVal = seg.filter(s => !/^[-+]?\d/.test(s));

  numerics.map((n, i) => {
    shadowProp[map[i]] = numerics[i];
    return n;
  });

  restVal.map((r, i) => {
    if (['inset', 'outset'].indexOf(r) !== -1) {
      shadowProp.set = r;
    } else {
      shadowProp.color = r;
    }
    return r;
  });
  return shadowProp;
};

export class ShadowPanel extends Component {
  constructor(props) {
    super(props);

    const shadowStr = props.element.style.boxShadow || '';
    const shadowProp = parseShadowStr(shadowStr);

    this.state = {
      shadowProp,
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
    } ${shadowSeg.spread} ${shadowSeg.color} ${shadowSeg.set}`;
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
        <div className="basic-box flex justify-between">
          <div className="flex items-center justify-center">
            <label htmlFor="color">Color</label>
            <ColorPicker
              className="ml1"
              color={this.state.shadowProp.color}
              onColorChange={val => this.handleShadowProp('color', val)}
            />
          </div>
          <div className="flex items-center justify-center">
            <Button
              className="m0"
              active={this.state.shadowProp.set === 'inset'}
              onClick={() => this.handleShadowProp('set', 'inset')}
            >
              Inset
            </Button>
            <Button
              className="m0"
              active={this.state.shadowProp.set === ''}
              onClick={() => this.handleShadowProp('set', '')}
            >
              Outset
            </Button>
          </div>
        </div>
      </BasicPanel>
    );
  }
}
