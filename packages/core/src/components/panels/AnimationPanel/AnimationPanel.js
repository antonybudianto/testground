import React, { Component } from 'react';

import BasicPanel from '../BasicPanel';
import Button from '../../controls/Button';

export class AnimationPanel extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.element.setAttribute('style', {});
  }

  render() {
    return (
      <BasicPanel title="ANIMATION">
        <div className="flex justify-center">
          <div className="flex flex-column">
            <Button icon>0%</Button>
            <Button icon>100%</Button>
          </div>
          <div className="ml2">
            <strong>CODE</strong>
            <div className="mt1">sakit</div>
          </div>
        </div>
      </BasicPanel>
    );
  }
}
