import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './MainBox.css';

import GeneralPanel from './panels/GeneralPanel';
import SourceView from './SourceView';
import Button from './controls/Button';
import MenuPanel from './panels/MenuPanel';

class MainBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 1,
    };

    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleSelect() {
    this.setState({ view: 1 });
    this.props.onSelect();
  }

  changeView(view) {
    this.setState({ view });
  }

  toggleView() {
    this.setState({
      view: this.state.view === 1 ? 2 : 1,
    });
  }

  handleMenuClick() {
    this.setState({
      view: 0,
    });
  }

  renderView() {
    const { element } = this.props;
    switch (this.state.view) {
      case 0:
        return <MenuPanel element={element} />;
      case 1: {
        if (element) {
          return <GeneralPanel element={element} />;
        } else {
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
      }
      case 2:
        return <SourceView element={element} />;
    }
    return null;
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
            <Button onClick={this.handleMenuClick}>
              <i className="fas fa-th" />
            </Button>
            <Button active={this.props.selecting} onClick={this.handleSelect}>
              Select
            </Button>
            {element && (
              <button className="main-box__btn" onClick={this.toggleView}>
                {this.state.view === 1 ? 'View source' : 'View tools'}
              </button>
            )}
          </div>
        </div>
      </Draggable>
    );
  }
}

export default MainBox;
