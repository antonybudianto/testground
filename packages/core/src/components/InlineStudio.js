import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

import MainBox from './MainBox';
import { startPick, reset } from '../exlib/element-inspector';
import { internalPlugins } from './internal-plugins';
import { logWarning } from '../util/log';
import './InlineStudio.css';

fontawesome.library.add(solid);

export class InlineStudio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minimized: false,
      selecting: false,
      element: null,
      warn: false,
    };

    this.onSelect = this.onSelect.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onReset = this.onReset.bind(this);
    this.toggleWindow = this.toggleWindow.bind(this);
  }

  componentDidMount() {
    this.setState({
      warn: true,
    });
  }

  onClick(el) {
    setTimeout(() => {
      this.setState({
        element: el,
        selecting: false,
      });
    }, 1);
  }

  onReset() {
    reset();
    this.setState({
      element: null,
      selecting: false,
    });
  }

  onSelect() {
    this.setState(
      {
        selecting: true,
        element: null,
      },
      () => {
        startPick({
          onClick: this.onClick,
          excludedTarget: '.inline-studio',
        });
      }
    );
  }

  toggleWindow() {
    this.setState({
      minimized: !this.state.minimized,
    });
  }

  render() {
    const { plugins = [] } = this.props;
    const internalIds = internalPlugins.map(p => p.id);
    const externalPlugins = plugins.filter(
      p => internalIds.indexOf(p.id) === -1
    );
    const dupCount = plugins.length - externalPlugins.length;
    if (dupCount !== 0 && !this.state.warn) {
      logWarning(
        `${dupCount} plugins have reserved "id" (${internalIds.join(
          ', '
        )}), they'll be ignored.`
      );
    }

    return (
      <div className="inline-studio">
        {this.state.minimized && (
          <div
            title="Click to open React Instudio popup"
            onClick={this.toggleWindow}
            className="minimized-icon flex items-center justify-center"
          >
            <i className="fas fa-window-maximize" />
          </div>
        )}
        <MainBox
          minimized={this.state.minimized}
          plugins={externalPlugins}
          onSelect={this.onSelect}
          onReset={this.onReset}
          handleMinimize={this.toggleWindow}
          selecting={this.state.selecting}
          element={this.state.element}
        />
      </div>
    );
  }
}
