import React, { Component } from 'react';

import ColorPicker from '../../../controls/ColorPicker';
import { handleChangeStyle } from '../../../../util/change-style';
import { Input } from '../../../controls/Input';
import Button from '../../../controls/Button';
import { SimplePopup } from '../../../controls/SimplePopup/SimplePopup';

class BoxSubpanel extends Component {
  constructor(props) {
    super(props);

    const style = this.props.element.style;

    this.state = {
      style: {
        opacity: style.opacity,
        marginLeft: style.marginLeft,
        marginRight: style.marginRight,
        marginTop: style.marginTop,
        marginBottom: style.marginBottom,
        paddingLeft: style.paddingLeft,
        paddingRight: style.paddingRight,
        paddingTop: style.paddingTop,
        paddingBottom: style.paddingBottom,
        margin: style.margin,
        padding: style.padding,
        width: style.width,
        height: style.height,
        backgroundColor: style.backgroundColor,
      },
    };
  }

  render() {
    // const { element } = this.props;
    return (
      <div className="mt1 flex flex-column">
        <strong className="basic-panel__subtitle">Element</strong>
        <div className="flex items-stretch">
          <div className="basic-box p1 flex items-center flex-auto">
            <div>Size: &nbsp;</div>
            <div
              className="flex justify-center items-stretch"
              style={{ height: '30px' }}
            >
              <Input
                placeholder="W"
                value={this.state.style.width}
                onChange={val => this.setState(handleChangeStyle('width', val))}
                style={{ width: 40 }}
                className="general-panel__input"
              />
              <i className="fas fa-times mx1" style={{ height: 'auto' }} />
              <Input
                type="text"
                placeholder="H"
                value={this.state.style.height}
                onChange={val =>
                  this.setState(handleChangeStyle('height', val))
                }
                style={{ width: 40 }}
                className="general-panel__input"
              />
            </div>
          </div>
          <div className="basic-box p1">
            <ColorPicker
              onColorChange={val => {
                this.setState(handleChangeStyle('backgroundColor', val, false));
              }}
              color={this.state.style.backgroundColor || ''}
            />
          </div>
        </div>
        <div className="flex">
          <div className="basic-box p1 flex items-center">
            <span>Margin: &nbsp;</span>
            <div className="flex items-stretch">
              <Input
                placeholder="All"
                value={this.state.style.margin}
                style={{ width: 35 }}
                onChange={val =>
                  this.setState(handleChangeStyle('margin', val))
                }
                className="general-panel__input"
              />
              <SimplePopup
                trigger={
                  <Button className="m0">
                    <i className="fas fa-ellipsis-h" />
                  </Button>
                }
              >
                <div className="flex flex-wrap justify-center p1">
                  <table>
                    <tbody>
                      <tr>
                        <td>&nbsp;</td>
                        <td>
                          <div className="basic-box">
                            <Input
                              style={{ width: '50px' }}
                              placeholder="top"
                              value={this.state.style.marginTop}
                              onChange={val =>
                                this.setState(
                                  handleChangeStyle('marginTop', val)
                                )
                              }
                            />
                          </div>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="basic-box">
                            <Input
                              style={{ width: '50px' }}
                              placeholder="left"
                              value={this.state.style.marginLeft}
                              onChange={val =>
                                this.setState(
                                  handleChangeStyle('marginLeft', val)
                                )
                              }
                            />
                          </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>
                          <div className="basic-box">
                            <Input
                              style={{ width: '50px' }}
                              placeholder="right"
                              value={this.state.style.marginRight}
                              onChange={val =>
                                this.setState(
                                  handleChangeStyle('marginRight', val)
                                )
                              }
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>
                          <div className="basic-box">
                            <Input
                              style={{ width: '50px' }}
                              placeholder="bottom"
                              value={this.state.style.marginBottom}
                              onChange={val =>
                                this.setState(
                                  handleChangeStyle('marginBottom', val)
                                )
                              }
                            />
                          </div>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </SimplePopup>
            </div>
          </div>
          <div className="basic-box p1 flex items-center">
            <span>Padding: &nbsp;</span>
            <div className="flex items-stretch">
              <Input
                placeholder="All"
                value={this.state.style.padding}
                onChange={val =>
                  this.setState(handleChangeStyle('padding', val))
                }
                style={{ width: 35 }}
                className="general-panel__input"
              />
              <SimplePopup
                trigger={
                  <Button className="m0">
                    <i className="fas fa-ellipsis-h" />
                  </Button>
                }
              >
                <div className="flex flex-wrap justify-center p1">
                  <table>
                    <tbody>
                      <tr>
                        <td>&nbsp;</td>
                        <td>
                          <div className="basic-box">
                            <Input
                              style={{ width: '50px' }}
                              placeholder="top"
                              value={this.state.style.paddingTop}
                              onChange={val =>
                                this.setState(
                                  handleChangeStyle('paddingTop', val)
                                )
                              }
                            />
                          </div>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="basic-box">
                            <Input
                              style={{ width: '50px' }}
                              placeholder="left"
                              value={this.state.style.paddingLeft}
                              onChange={val =>
                                this.setState(
                                  handleChangeStyle('paddingLeft', val)
                                )
                              }
                            />
                          </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>
                          <div className="basic-box">
                            <Input
                              style={{ width: '50px' }}
                              placeholder="right"
                              value={this.state.style.paddingRight}
                              onChange={val =>
                                this.setState(
                                  handleChangeStyle('paddingRight', val)
                                )
                              }
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>
                          <div className="basic-box">
                            <Input
                              style={{ width: '50px' }}
                              placeholder="bottom"
                              value={this.state.style.paddingBottom}
                              onChange={val =>
                                this.setState(
                                  handleChangeStyle('paddingBottom', val)
                                )
                              }
                            />
                          </div>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </SimplePopup>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="basic-box p1 flex items-center">
            <span>Opacity: &nbsp;</span>
            <div className="flex items-stretch">
              <Input
                placeholder="All"
                defaultUnit=""
                unitless
                stepSize={0.1}
                value={this.state.style.opacity}
                style={{ width: 35 }}
                onChange={val =>
                  this.setState(handleChangeStyle('opacity', val))
                }
                className="general-panel__input"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxSubpanel;
