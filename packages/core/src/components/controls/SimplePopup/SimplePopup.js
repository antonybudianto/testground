import React from 'react';
import Popup from 'reactjs-popup';

export const SimplePopup = props => (
  <Popup
    trigger={props.trigger}
    position={props.position || 'right top'}
    on="click"
    closeOnDocumentClick
    mouseLeaveDelay={300}
    mouseEnterDelay={0}
    contentStyle={{ padding: '0px', border: 'none', width: 'auto' }}
    arrow={false}
  >
    {props.children}
  </Popup>
);
