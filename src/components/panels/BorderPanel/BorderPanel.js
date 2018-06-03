import React, { Component } from 'react';
import BasicPanel from '../BasicPanel';
import './BorderPanel.css';
import { handleChangeStyle } from '../../../util/change-style';

class BorderPanel extends Component {
  constructor(props) {
    super(props);

    const { element } = props;
    const style = element.style;

    this.state = {
      style: {
        borderTopWidth: style.borderTopWidth,
        borderBottomWidth: style.borderBottomWidth,
        borderLeftWidth: style.borderLeftWidth,
        borderRightWidth: style.borderRightWidth,
      },
    };
  }

  render() {
    return (
      <BasicPanel title="BORDER">
        <div>
          <table>
            <tbody>
              <tr>
                <td className="border border-panel__border">&nbsp;</td>
                <td className="border border-panel__border">
                  <input
                    type="text"
                    className="border-panel__input"
                    placeholder="top"
                    value={this.state.style.borderTopWidth}
                    onChange={e =>
                      this.setState(
                        handleChangeStyle('borderTopWidth', e.target.value)
                      )
                    }
                  />
                </td>
                <td className="border border-panel__border">&nbsp;</td>
              </tr>
              <tr>
                <td className="border border-panel__border">
                  <input
                    type="text"
                    className="border-panel__input"
                    placeholder="left"
                    value={this.state.style.borderLeftWidth}
                    onChange={e =>
                      this.setState(
                        handleChangeStyle('borderLeftWidth', e.target.value)
                      )
                    }
                  />
                </td>
                <td className="border border-panel__border">
                  <input
                    type="text"
                    className="border-panel__input"
                    placeholder="all"
                  />
                </td>
                <td className="border border-panel__border">
                  <input
                    type="text"
                    className="border-panel__input"
                    placeholder="right"
                    value={this.state.style.borderRightWidth}
                    onChange={e =>
                      this.setState(
                        handleChangeStyle('borderRightWidth', e.target.value)
                      )
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-panel__border">&nbsp;</td>
                <td className="border border-panel__border">
                  <input
                    type="text"
                    className="border-panel__input"
                    placeholder="bottom"
                    value={this.state.style.borderBottomWidth}
                    onChange={e =>
                      this.setState(
                        handleChangeStyle('borderBottomWidth', e.target.value)
                      )
                    }
                  />
                </td>
                <td className="border border-panel__border">&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </BasicPanel>
    );
  }
}

export default BorderPanel;
