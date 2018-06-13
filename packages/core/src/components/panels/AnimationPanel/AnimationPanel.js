import React, { Component } from 'react';
import { generate } from 'shortid';
import { connect } from 'react-redux';
import insertCss from 'insert-styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { setAnimation, setTime } from '../../../reducers/animation';
import BasicPanel from '../BasicPanel';
import Button from '../../controls/Button';

class AnimationPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tmpStyle: props.element.getAttribute('style'),
      animationProps: {
        duration: '1s',
        timingFunction: 'ease',
      },
    };

    this.handleClick = this.handleClick.bind(this);
    this.getCurrentAnim = this.getCurrentAnim.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.generateKeyframes = this.generateKeyframes.bind(this);
    this.setAnimation = this.setAnimation.bind(this);
  }

  componentDidMount() {
    const { element } = this.props;
    const currentStyle = element.getAttribute('style') || '';
    let id = element.dataset.instudioElementId;
    if (!id) {
      id = generate();
      element.dataset.instudioElementId = id;
      const defAnim = [[0, currentStyle], [100, '']];
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
    return { id, times: animation.data[id] };
  }

  generateKeyframes(anim) {
    const str = anim.times.reduce(
      (prev, curr) => `${prev} ${curr[0]}% {${curr[1]}}`,
      ''
    );
    const kf = `@keyframes ${anim.id} { ${str} }`;
    return kf.replace(/animation:.*;/g, '');
  }

  handleTimeChange(i) {
    const { element } = this.props;
    const currentAnim = this.getCurrentAnim();
    const selectedStyle = currentAnim.times[i][1];
    if (selectedStyle !== '') {
      element.setAttribute('style', selectedStyle);
    }
    this.props.dispatch(setTime(i));
  }

  setAnimation(anim) {
    const { element } = this.props;
    element.style.animationName = anim.id;
    element.style.animationDuration = this.state.animationProps.duration;
    element.style.animationTimingFunction = this.state.animationProps.animationTimingFunction;
  }

  handleSave() {
    const { element, animation } = this.props;
    const currentAnim = this.getCurrentAnim();
    const newAnim = { ...currentAnim };
    const currentStyle = element.getAttribute('style');
    newAnim.times[animation.currentTime][1] = currentStyle;
    const kf = this.generateKeyframes(currentAnim);
    this.props.dispatch(setAnimation(currentAnim.id, newAnim.times));
    this.setAnimation(currentAnim);
    insertCss(kf);
  }

  handlePlay() {
    const { element } = this.props;
    const currentAnim = this.getCurrentAnim();
    element.style.animation = '';
    element.setAttribute('style', currentAnim.times[0][1]);
    setTimeout(() => {
      this.setAnimation(currentAnim);
    }, 500);
  }

  handleReset() {
    const { element } = this.props;
    element.setAttribute('style', this.state.tmpStyle);
  }

  render() {
    const { element, animation } = this.props;

    const currentAnim = this.getCurrentAnim();

    if (currentAnim === null) {
      return null;
    }

    const kf = this.generateKeyframes(currentAnim);

    return (
      <BasicPanel title="ANIMATION">
        <div className="flex justify-center">
          <div className="flex flex-column">
            <span>Timeline</span>
            {currentAnim.times.map((time, i) => (
              <Button
                icon
                key={i}
                active={animation.currentTime === i}
                onClick={() => this.handleTimeChange(i)}
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
              <Button onClick={this.handleSave}>Save</Button>
              <Button onClick={this.handleReset}>Reset</Button>
              <Button onClick={this.handlePlay}>Play</Button>
              <CopyToClipboard text={kf}>
                <Button>
                  <i className="fas fa-clipboard" />
                </Button>
              </CopyToClipboard>
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
