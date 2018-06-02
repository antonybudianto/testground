import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './MainBox.css';

import GeneralPanel from './panels/GeneralPanel';
import SourceView from './panels/SourceViewPanel';
import Button from './controls/Button';
import MenuPanel from './panels/MenuPanel';

const internalPanels = [
  {
    id: 'menu',
    component: MenuPanel,
  },
  {
    id: 'general',
    component: GeneralPanel,
  },
  {
    id: 'source',
    component: SourceView,
  },
];

class MainBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'general',
    };

    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleSelect() {
    this.setState({ view: 'general' });
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
    const { element } = this.props;

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

    const panel = internalPanels.find(p => p.id === this.state.view);

    if (panel) {
      return <panel.component changeView={this.changeView} element={element} />;
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
