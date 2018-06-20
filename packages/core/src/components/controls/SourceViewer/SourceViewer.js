import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Button } from '../Button';

export const SourceViewer = props => (
  <div className="p1 pr3">
    <pre
      style={{
        maxHeight: '200px',
        maxWidth: '300px',
        overflow: 'auto',
      }}
      className="flex"
    >
      {props.text}
    </pre>
    <CopyToClipboard text={props.text}>
      <Button
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
        }}
      >
        <i className="fas fa-clipboard" />
      </Button>
    </CopyToClipboard>
  </div>
);
