import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Button } from '../../../components/controls/Button';
import './SourceViewPanel.css';

class SourceViewPanel extends Component {
  render() {
    const { element } = this.props;
    const styleStr = element.getAttribute('style') || '';
    let displayCss = styleStr.replace(/;\s*/g, '; \n');
    return (
      <div className="p1">
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

export default SourceViewPanel;
