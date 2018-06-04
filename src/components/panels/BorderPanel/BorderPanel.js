import React, { Component } from 'react';
import BasicPanel from '../BasicPanel';
import './BorderPanel.css';
import { handleChangeStyle } from '../../../util/change-style';
import BorderGroup from './components/BorderGroup';

class BorderPanel extends Component {
  constructor(props) {
    super(props);

    const { element } = props;
    const style = element.style;

    this.state = {
      style: {
        borderRadius: style.borderRadius,
        borderTopLeftRadius: style.borderTopLeftRadius,
        borderTopRightRadius: style.borderTopRightRadius,
        borderBottomLeftRadius: style.borderBottomLeftRadius,
        borderBottomRightRadius: style.borderBottomRightRadius,
        borderColor: style.borderColor,
        borderWidth: style.borderWidth,
        borderTopWidth: style.borderTopWidth,
        borderBottomWidth: style.borderBottomWidth,
        borderLeftWidth: style.borderLeftWidth,
        borderRightWidth: style.borderRightWidth,
        borderTopColor: style.borderTopColor,
        borderBottomColor: style.borderBottomColor,
        borderLeftColor: style.borderLeftColor,
        borderRightColor: style.borderRightColor,

        borderTopStyle: style.borderTopStyle,
        borderBottomStyle: style.borderBottomStyle,
        borderLeftStyle: style.borderLeftStyle,
        borderRightStyle: style.borderRightStyle,
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
                <td className="border border-panel__border">
                  <div className="flex items-center justify-center">
                    <input
                      type="text"
                      className="border-panel__input"
                      placeholder="TL radius"
                      value={this.state.style.borderTopLeftRadius}
                      onChange={e =>
                        this.setState(
                          handleChangeStyle(
                            'borderTopLeftRadius',
                            e.target.value
                          )
                        )
                      }
                    />
                  </div>
                </td>
                <td className="border border-panel__border">
                  <BorderGroup
                    color={this.state.style.borderTopColor}
                    width={this.state.style.borderTopWidth}
                    style={this.state.style.borderTopStyle}
                    widthPlaceholder="top"
                    onColorChange={val =>
                      this.setState(handleChangeStyle('borderTopColor', val))
                    }
                    onWidthChange={val =>
                      this.setState(handleChangeStyle('borderTopWidth', val))
                    }
                    onStyleChange={val =>
                      this.setState(handleChangeStyle('borderTopStyle', val))
                    }
                  />
                </td>
                <td className="border border-panel__border">
                  <div className="flex items-center justify-center">
                    <input
                      type="text"
                      className="border-panel__input"
                      placeholder="TR radius"
                      value={this.state.style.borderTopRightRadius}
                      onChange={e =>
                        this.setState(
                          handleChangeStyle(
                            'borderTopRightRadius',
                            e.target.value
                          )
                        )
                      }
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-panel__border">
                  <BorderGroup
                    color={this.state.style.borderLeftColor}
                    width={this.state.style.borderLeftWidth}
                    style={this.state.style.borderLeftStyle}
                    widthPlaceholder="Left"
                    onColorChange={val =>
                      this.setState(handleChangeStyle('borderLeftColor', val))
                    }
                    onWidthChange={val =>
                      this.setState(handleChangeStyle('borderLeftWidth', val))
                    }
                    onStyleChange={val =>
                      this.setState(handleChangeStyle('borderLeftStyle', val))
                    }
                  />
                </td>
                <td className="border border-panel__border">
                  <div className="flex items-center justify-center">
                    <BorderGroup
                      color={this.state.style.borderColor}
                      width={this.state.style.borderWidth}
                      style={this.state.style.borderStyle}
                      widthPlaceholder="All"
                      onColorChange={val =>
                        this.setState(handleChangeStyle('borderColor', val))
                      }
                      onWidthChange={val =>
                        this.setState(handleChangeStyle('borderWidth', val))
                      }
                      onStyleChange={val =>
                        this.setState(handleChangeStyle('borderStyle', val))
                      }
                    />
                    <input
                      type="text"
                      className="border-panel__input mr1"
                      placeholder="all radius"
                      value={this.state.style.borderRadius}
                      onChange={e =>
                        this.setState(
                          handleChangeStyle('borderRadius', e.target.value)
                        )
                      }
                    />
                  </div>
                </td>
                <td className="border border-panel__border">
                  <BorderGroup
                    color={this.state.style.borderRightColor}
                    width={this.state.style.borderRightWidth}
                    style={this.state.style.borderRightStyle}
                    widthPlaceholder="Right"
                    onColorChange={val =>
                      this.setState(handleChangeStyle('borderRightColor', val))
                    }
                    onWidthChange={val =>
                      this.setState(handleChangeStyle('borderRightWidth', val))
                    }
                    onStyleChange={val =>
                      this.setState(handleChangeStyle('borderRightStyle', val))
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-panel__border">
                  <div className="flex items-center justify-center">
                    <input
                      type="text"
                      className="border-panel__input"
                      placeholder="BL radius"
                      value={this.state.style.borderBottomLeftRadius}
                      onChange={e =>
                        this.setState(
                          handleChangeStyle(
                            'borderBottomLeftRadius',
                            e.target.value
                          )
                        )
                      }
                    />
                  </div>
                </td>
                <td className="border border-panel__border">
                  <BorderGroup
                    color={this.state.style.borderBottomColor}
                    width={this.state.style.borderBottomWidth}
                    style={this.state.style.borderBottomStyle}
                    widthPlaceholder="Bottom"
                    onColorChange={val =>
                      this.setState(handleChangeStyle('borderBottomColor', val))
                    }
                    onWidthChange={val =>
                      this.setState(handleChangeStyle('borderBottomWidth', val))
                    }
                    onStyleChange={val =>
                      this.setState(handleChangeStyle('borderBottomStyle', val))
                    }
                  />
                </td>
                <td className="border border-panel__border">
                  <div className="flex items-center justify-center">
                    <input
                      type="text"
                      className="border-panel__input"
                      placeholder="BR radius"
                      value={this.state.style.borderBottomRightRadius}
                      onChange={e =>
                        this.setState(
                          handleChangeStyle(
                            'borderBottomRightRadius',
                            e.target.value
                          )
                        )
                      }
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </BasicPanel>
    );
  }
}

export default BorderPanel;
