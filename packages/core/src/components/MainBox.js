import React, { Component } from 'react';
import Draggable from 'react-draggable';
import classNames from 'classnames';
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
    if (this.props.selecting) {
      this.props.onReset();
      return;
    }
    this.setState({ view: 'animation' });
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
      return <h3 className="p1">Let's start by selecting element!</h3>;
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
      <Draggable
        handle=".main-box__heading-title"
        defaultPosition={{ x: 50, y: 25 }}
      >
        <div
          className={classNames('main-box', {
            hidden: this.props.minimized,
          })}
        >
          <div className="main-box__heading flex justify-between">
            <div className="flex-auto main-box__heading-title">
              {elementTitle}
            </div>
            <Button
              className="border-none m0 p0"
              style={{
                padding: '0 4px',
              }}
              onClick={this.props.handleMinimize}
            >
              <i className="fas fa-window-minimize" />
            </Button>
          </div>
          {this.renderView()}
          <div className="p1">
            <Button
              className={classNames({
                hide: !element,
              })}
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
