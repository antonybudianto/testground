import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './MainBox.css';

import Button from './controls/Button';

import { internalPlugins } from './internal-plugins';

class MainBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'shadow',
    };

    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleSelect() {
    this.setState({ view: 'shadow' });
    this.props.onSelect();
  }

  changeView(view) {
    this.setState({ view });
  }

  handleMenuClick() {
    this.setState({
      view: 'menu',
    });
  }

  renderView() {
    const { element, plugins } = this.props;

    if (!element) {
      return (
        <div
          style={{
            padding: '5px',
          }}
        >
          Let's start by selecting element!
        </div>
      );
    }

    const allPlugins = [...internalPlugins, ...plugins];
    const plugin = allPlugins.find(p => p.id === this.state.view);

    if (plugin) {
      return (
        <plugin.panel.component
          plugins={plugins}
          changeView={this.changeView}
          element={element}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    const { element } = this.props;
    const elementTitle = element
      ? `${element.localName}${element.className ? '.' : ''}${
          element.className
        }${element.id ? '#' : ''}${element.id}`
      : 'React Inline Studio';

    return (
      <Draggable handle=".main-box__title" defaultPosition={{ x: 50, y: 25 }}>
        <div className="main-box">
          <div className="main-box__title">{elementTitle}</div>
          {this.renderView()}
          <div
            style={{
              padding: '5px',
            }}
          >
            <Button
              active={this.state.view === 'menu'}
              onClick={this.handleMenuClick}
            >
              <i className="fas fa-th" />
            </Button>
            <Button active={this.props.selecting} onClick={this.handleSelect}>
              Select
            </Button>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default MainBox;
