import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './MainBox.css';

import GeneralPanel from './panels/GeneralPanel';
import SourceView from './SourceView';

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

  renderView() {
    const { element } = this.props;
    if (this.state.view === 1) {
      if (element) {
        return (
          <div>
            <GeneralPanel element={element} />
          </div>
        );
      }
      return (
        <div
          style={{
            padding: '5px',
          }}
        >
          Let's start by selecting element!
        </div>
      );
    } else {
      return <SourceView element={element} />;
    }
  }

  render() {
    const { element } = this.props;
    const elementTitle = element
      ? `<${element.localName}> ${element.className}`
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
            <button className="main-box__btn" onClick={this.handleSelect}>
              {this.props.selecting ? 'Selecting...' : 'Select'}
            </button>
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
