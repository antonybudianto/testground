import React from 'react';
import classNames from 'classnames';

import Button from '../../../controls/Button';
import Input from '../../../controls/Input';
import ColorPicker from '../../../controls/ColorPicker';
import { SimplePopup } from '../../../controls/SimplePopup/SimplePopup';

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
      <Input
        className="border-panel__input ml1"
        placeholder={widthPlaceholder}
        value={width}
        onChange={val => onWidthChange(val)}
      />
      <SimplePopup
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
      </SimplePopup>
    </div>
  );
};

export default BorderGroup;
