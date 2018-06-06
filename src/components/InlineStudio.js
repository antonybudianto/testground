import React, { Component } from 'react';
import MainBox from './MainBox';

import { startPick } from '../lib/element-inspector';
import 'basscss/css/basscss.css';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import { internalPlugins } from './internal-plugins';
import { logWarning } from '../util/log';

fontawesome.library.add(solid);

class InlineStudio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selecting: false,
      element: null,
      warn: false,
    };

    this.onSelect = this.onSelect.bind(this);
    this.onClick = this.onClick.bind(this);
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
  onSelect() {
    this.setState(
      {
        selecting: true,
        element: null,
      },
      () => {
        startPick({
          onClick: this.onClick,
          excludedTarget: '.main-box',
        });
      }
    );
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
      <MainBox
        plugins={externalPlugins}
        onSelect={this.onSelect}
        selecting={this.state.selecting}
        element={this.state.element}
      />
    );
  }
}

export default InlineStudio;
