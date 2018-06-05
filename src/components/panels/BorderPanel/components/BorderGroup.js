import React from 'react';
import Popup from 'reactjs-popup';
import classNames from 'classnames';

import Button from '../../../controls/Button';
import ColorPicker from '../../../controls/ColorPicker';

const borderStyles = [
  'dashed',
  'dotted',
  'double',
  'inset',
  'outset',
  'solid',
  'ridge',
  'groove',
  'none',
];

const BorderGroup = ({
  width,
  color,
  style,
  onColorChange,
  onWidthChange,
  onStyleChange,
  widthPlaceholder,
}) => {
  return (
    <div className="flex items-center p1">
      <ColorPicker color={color || ''} onColorChange={onColorChange} />
      <input
        type="text"
        className="border-panel__input ml1"
        placeholder={widthPlaceholder}
        value={width}
        onChange={e => onWidthChange(e.target.value)}
      />
      <Popup
        trigger={
          <Button
            className="ml1"
            style={{
              borderColor: color,
              borderStyle: style,
            }}
            sm
          >
            {style || 'no style'}
          </Button>
        }
        position="right top"
        on="click"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: 'none', width: 'auto' }}
        arrow={false}
      >
        <div className="flex flex-wrap justify-center">
          {borderStyles.map((b, i) => (
            <div
              key={i}
              style={{
                borderColor: color,
                borderStyle: b,
                borderWidth: '3px',
              }}
              onClick={() => onStyleChange(b)}
              className={classNames('p1 m1 border-panel__style-menu', {
                'border-panel__style-menu--active': style === b,
              })}
            >
              {b}
            </div>
          ))}
        </div>
      </Popup>
    </div>
  );
};

export default BorderGroup;
