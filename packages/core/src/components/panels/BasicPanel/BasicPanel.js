import React, { Component } from 'react';
import css from './BasicPanel.css';

class BasicPanel extends Component {
  render() {
    return (
      <div className={css['basic-panel']}>
        <div className={css['basic-panel__title']}>{this.props.title}</div>
        {this.props.children}
      </div>
    );
  }
}

export default BasicPanel;
