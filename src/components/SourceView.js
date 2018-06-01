import React, { Component } from 'react';
import { string as styleToString } from 'to-style';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Button from '../components/controls/Button';
import './SourceView.css';

class SourceView extends Component {
  render() {
    const { element } = this.props;
    const style = Object.entries(element.style)
      .filter(a => a[1] && isNaN(a[0]))
      .reduce((prev, curr) => {
        return {
          ...prev,
          [curr[0]]: curr[1],
        };
      }, {});
    const display = JSON.stringify(style, null, 2);
    let displayCss = styleToString(style).replace(/; /g, '; \n');
    displayCss = displayCss ? displayCss + ';' : '';
    return (
      <div
        style={{
          padding: '5px',
        }}
      >
        <div className="flex justify-between items-center">
          <strong className="basic-panel__subtitle">OBJECT</strong> &nbsp;
          <CopyToClipboard text={display}>
            <Button>
              <i className="fas fa-clipboard" />
            </Button>
          </CopyToClipboard>
        </div>
        <pre className="source-view__content">{display}</pre>
        <div className="flex justify-between items-center">
          <strong className="basic-panel__subtitle">CSS</strong> &nbsp;
          <CopyToClipboard text={displayCss}>
            <Button>
              <i className="fas fa-clipboard" />
            </Button>
          </CopyToClipboard>
        </div>
        <pre className="source-view__content">{displayCss}</pre>
      </div>
    );
  }
}

export default SourceView;
