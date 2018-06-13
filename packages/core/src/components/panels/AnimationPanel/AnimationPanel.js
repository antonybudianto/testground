import React, { Component } from 'react';
import { generate } from 'shortid';
import { connect } from 'react-redux';

import { setAnimation } from '../../../reducers/animation';
import BasicPanel from '../BasicPanel';
import Button from '../../controls/Button';

class AnimationPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.getCurrentAnim = this.getCurrentAnim.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  componentDidMount() {
    const { element } = this.props;
    const currentStyle = element.getAttribute('style');
    let id = element.dataset.instudioElementId;
    if (!id) {
      id = generate();
      element.dataset.instudioElementId = id;
      const defAnim = [[0, currentStyle], [100, currentStyle]];
      this.props.dispatch(setAnimation(id, defAnim));
    }
  }

  handleClick() {
    this.props.element.setAttribute('style', 'color: blue;');
  }

  getCurrentAnim() {
    const { element, animation } = this.props;
    const id = element.dataset.instudioElementId;
    if (!id) {
      return null;
    }
    return animation[id];
  }

  handleTimeChange(time) {
    this.setState({
      time: time[0],
    });
  }

  render() {
    const { element, animation } = this.props;
    console.log(animation);

    const currentAnim = this.getCurrentAnim();

    if (currentAnim === null) {
      return null;
    }

    return (
      <BasicPanel title="ANIMATION">
        <div className="flex justify-center">
          <div className="flex flex-column">
            {currentAnim.map((time, i) => (
              <Button
                onClick={() => this.handleTimeChange(time)}
                active={this.state.time === time[0]}
                icon
                key={i}
              >
                {time[0]}%
              </Button>
            ))}
          </div>
          <div className="ml2">
            <div>
              - First, select the timeline (0% - 100%) <br />
              - Now you can change the style to be animated <br />
              - Click 'Save' to record the timeline <br />
              - Repeat for the next timeline
            </div>
            <div className="mt1 flex justify-center">
              <Button>Save</Button>
            </div>
          </div>
        </div>
      </BasicPanel>
    );
  }
}

const mapStateToProps = state => ({
  animation: state.animation,
});

export default connect(mapStateToProps)(AnimationPanel);
