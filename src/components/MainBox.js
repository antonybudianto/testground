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

  handleMenuClick() {
    this.setState({
      view: 0,
    });
  }

  renderView() {
    const { element } = this.props;
    switch (this.state.view) {
      case 0:
        return <MenuPanel changeView={this.changeView} element={element} />;
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
      default:
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
            <Button onClick={this.handleMenuClick}>
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
