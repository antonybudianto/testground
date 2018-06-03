import React, { Component } from 'react';
import BasicPanel from '../BasicPanel';

class BorderPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {},
    };
  }

  render() {
    return (
      <BasicPanel title="BORDER">
        <div>Border</div>
      </BasicPanel>
    );
  }
}

export default BorderPanel;
