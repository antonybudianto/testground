import React, { Component } from 'react';
import classNames from 'classnames';

import BasicPanel from '../BasicPanel';
import Button from '../../controls/Button';
import './MenuPanel.css';
import { internalPlugins } from '../../internal-plugins';

const MenuButton = props => {
  return (
    <Button
      {...props}
      className={classNames(
        'flex flex-column items-center justify-center col-3',
        props.className
      )}
    >
      <i className={classNames('fas', props.menuIcon)} />
      <span className="menu-panel__btn-text mt1">{props.menuName}</span>
    </Button>
  );
};

const MenuGroup = props => {
  return (
    <div className={classNames('flex flex-column', props.className)}>
      <strong className="basic-panel__subtitle">{props.title}</strong>
      <div className="menu-panel flex flex-wrap justify-between">
        {props.children}
      </div>
    </div>
  );
};

class MenuPanel extends Component {
  render() {
    const { element, changeView, plugins } = this.props;
    if (element) {
      return (
        <BasicPanel title="MENU">
          <MenuGroup title="Tools">
            {internalPlugins
              .filter(p => p.id !== 'menu')
              .map(p => (
                <MenuButton
                  key={p.id}
                  menuName={p.menu.menuName}
                  menuIcon={p.menu.menuIcon}
                  onClick={() => changeView(p.id)}
                />
              ))}
          </MenuGroup>

          {plugins.length > 0 && (
            <MenuGroup title="Plugins" className="mt1">
              {plugins.map(p => (
                <MenuButton
                  key={p.id}
                  menuName={p.menu.menuName}
                  menuIcon={p.menu.menuIcon}
                  onClick={() => changeView(p.id)}
                />
              ))}
            </MenuGroup>
          )}
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
