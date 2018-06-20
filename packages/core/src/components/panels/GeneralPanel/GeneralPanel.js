import React, { Component } from 'react';

import BasicPanel from '../BasicPanel';
import { Button } from '../../controls/Button';
import ColorPicker from '../../controls/ColorPicker';
import './GeneralPanel.css';
import BoxSubpanel from './components/BoxSubpanel';
import { handleChangeStyle } from '../../../util/change-style';
import { Input } from '../../controls/Input';
import { initStyle } from '../../../util/init-style';
import boxCss from '../../../style/box.css';

class GeneralPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        color: '',
        fontSize: '',
        fontWeight: '',
        fontStyle: '',
        textAlign: '',
        textDecoration: '',
      },
    };
  }

  componentDidMount() {
    this.setState(initStyle());
  }

  render() {
    const { style } = this.state;
    const { element } = this.props;

    console.dir(element);

    return (
      <BasicPanel title="GENERAL">
        <strong className="basic-panel__subtitle">Text</strong>
        <div className="flex items-stretch">
          <Button
            icon
            onClick={() =>
              this.setState(handleChangeStyle('fontWeight', 'bold'))
            }
            active={style.fontWeight === 'bold'}
          >
            <i className="fas fa-bold" />
          </Button>
          <Button
            icon
            onClick={() =>
              this.setState(handleChangeStyle('fontStyle', 'italic'))
            }
            active={style.fontStyle === 'italic'}
          >
            <i className="fas fa-italic" />
          </Button>
          <Button
            icon
            onClick={() =>
              this.setState(handleChangeStyle('textDecoration', 'underline'))
            }
            active={style.textDecoration === 'underline'}
          >
            <i className="fas fa-underline" />
          </Button>
          <Button
            icon
            onClick={() =>
              this.setState(handleChangeStyle('textDecoration', 'line-through'))
            }
            active={style.textDecoration === 'line-through'}
          >
            <i className="fas fa-strikethrough" />
          </Button>
          <Button
            icon
            onClick={() =>
              this.setState(handleChangeStyle('textAlign', 'left'))
            }
            active={style.textAlign === 'left'}
          >
            <i className="fas fa-align-left" />
          </Button>
          <Button
            icon
            onClick={() =>
              this.setState(handleChangeStyle('textAlign', 'center'))
            }
            active={style.textAlign === 'center'}
          >
            <i className="fas fa-align-center" />
          </Button>
          <Button
            icon
            onClick={() =>
              this.setState(handleChangeStyle('textAlign', 'right'))
            }
            active={style.textAlign === 'right'}
          >
            <i className="fas fa-align-right" />
          </Button>
          <Button
            icon
            onClick={() =>
              this.setState(handleChangeStyle('textAlign', 'justify'))
            }
            active={style.textAlign === 'justify'}
          >
            <i className="fas fa-align-justify" />
          </Button>
          <div className={boxCss['basic-box']}>
            <ColorPicker
              onColorChange={val => {
                this.setState(handleChangeStyle('color', val));
              }}
              color={this.state.style.color}
            />
          </div>
        </div>
        <div className="flex items-stretch">
          <div className="basic-box flex items-center">
            Font size: &nbsp;
            <Input
              placeholder="1em"
              value={style.fontSize}
              onChange={val =>
                this.setState(handleChangeStyle('fontSize', val))
              }
              style={{ width: 45 }}
              className="general-panel__input"
            />
          </div>
        </div>
        <BoxSubpanel element={element} />
      </BasicPanel>
    );
  }
}

export default GeneralPanel;
