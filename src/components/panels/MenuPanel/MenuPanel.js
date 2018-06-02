import React, { Component } from 'react';
import ClassNames from 'classnames';

import BasicPanel from '../BasicPanel';
import Button from '../../controls/Button';
import './MenuPanel.css';

const MenuButton = props => {
  return (
    <Button className="flex flex-column items-center justify-center" {...props}>
      <i className={ClassNames('fas', props.menuIcon)} />
      <span className="menu-panel__btn-text">{props.menuText}</span>
    </Button>
  );
};

const MenuGroup = props => {
  return (
    <div className="flex flex-column">
      <strong className="basic-panel__subtitle">{props.title}</strong>
      <div className="menu-panel flex">{props.children}</div>
    </div>
  );
};

class MenuPanel extends Component {
  render() {
    const { element, changeView } = this.props;
    if (element) {
      return (
        <BasicPanel title="MENU">
          <MenuGroup title="Tools">
            <MenuButton
              menuText="General"
              menuIcon="fa-home"
              title="General"
              onClick={() => changeView(1)}
            />
            <MenuButton
              menuText="Source"
              menuIcon="fa-code"
              title="View source"
              onClick={() => changeView(2)}
            />
          </MenuGroup>
        </BasicPanel>
      );
    } else {
      return (
        <div className="flex flex-column justify-center items-center p2">
          <i className="fas fa-hand-pointer" />
          <div className="pt1">
            No element is selected yet. Let's select one!
          </div>
        </div>
      );
    }
  }
}

export default MenuPanel;
