import React, { Component } from 'react';

import BasicPanel from '../BasicPanel';
import Button from '../../controls/Button';
import './GeneralPanel.css';
import BoxSubpanel from './components/BoxSubpanel';
import { handleChangeStyle } from '../../../util/change-style';

class GeneralPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        fontSize: props.element.style.fontSize,
        fontWeight: props.element.style.fontWeight,
        fontStyle: props.element.style.fontStyle,
        textAlign: props.element.style.textAlign,
        textDecoration: props.element.style.textDecoration,
      },
    };
  }

  render() {
    const { style } = this.state;
    const { element } = this.props;

    return (
      <BasicPanel title="GENERAL">
        <strong className="basic-panel__subtitle">Text</strong>
        <div>
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
        </div>
        <div>
          <div className="basic-box">
            Font size: &nbsp;
            <input
              type="text"
              placeholder="1em"
              value={style.fontSize}
              onChange={e =>
                this.setState(handleChangeStyle('fontSize', e.target.value))
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
