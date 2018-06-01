import React, { Component } from 'react';
import elementPicker from 'element-picker';
import MainBox from './MainBox';

import 'basscss/css/basscss.css';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(solid);

class InlineStudio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selecting: false,
      element: null,
    };

    this.onSelect = this.onSelect.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onClick(el) {
    setTimeout(() => {
      this.setState({
        element: el,
        selecting: false,
      });
    }, 1);
  }
  onSelect() {
    this.setState(
      {
        selecting: true,
        element: null,
      },
      () => {
        elementPicker.init({ onClick: this.onClick });
      }
    );
  }
  render() {
    return (
      <div>
        <MainBox
          onSelect={this.onSelect}
          selecting={this.state.selecting}
          element={this.state.element}
        />
      </div>
    );
  }
}

export default InlineStudio;
