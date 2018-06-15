import React, { Component } from 'react';
import { generate } from 'shortid';
import { connect } from 'react-redux';
import insertCss from 'insert-styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import classNames from 'classnames';

import { setAnimation, setTime } from '../../../reducers/animation';
import BasicPanel from '../BasicPanel';
import Button from '../../controls/Button';
import { SimplePopup } from '../../controls/SimplePopup/SimplePopup';
import css from './AnimationPanel.css';

const SourceViewer = props => (
  <div className="p1 pr3">
    <pre
      style={{
        maxHeight: '200px',
        maxWidth: '300px',
        overflow: 'auto',
      }}
      className="flex"
    >
      {props.text}
    </pre>
    <CopyToClipboard text={props.text}>
      <Button
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
        }}
      >
        <i className="fas fa-clipboard" />
      </Button>
    </CopyToClipboard>
  </div>
);

class AnimationPanel extends Component {
  constructor(props) {
    super(props);

    props.element.style.animation = '';

    this.state = {
      tmpStyle: props.element.style.cssText || '',
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
    let id = element.dataset.instudioElementId;
    if (!id) {
      id = generate();
      element.dataset.instudioElementId = id;
      const defAnim = [[0, ''], [100, '']];
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
      (prev, curr) =>
        `${prev}${curr[0]}% {${curr[1] || ''}${curr[1] ? ';' : ''}}`,
      ''
    );
    const kf = `@keyframes ${anim.id} {${str}}`;
    const filteredKf = kf
      .replace(/;+/g, ';')
      .replace(/(?:(animation(-[a-z]*)*))[ ]*:[ ]*[^;]+;/g, '')
      .replace(/\s+/g, ' ')
      .replace(/{/g, '{\n')
      .replace(/}/g, '}\n')
      .replace(/;\s*/g, ';\n');
    return filteredKf;
  }

  handleTimeChange(i) {
    const { element } = this.props;
    const currentAnim = this.getCurrentAnim();
    const selectedStyle = currentAnim.times[i][1];
    if (selectedStyle) {
      element.setAttribute('style', selectedStyle);
    }
    this.setAnimation(currentAnim);
    this.props.dispatch(setTime(i));
  }

  setAnimation(anim) {
    const { element } = this.props;
    element.style.animationName = anim.id;
    element.style.animationDuration = this.state.animationProps.duration;
    element.style.animationTimingFunction = this.state.animationProps.timingFunction;
  }

  handleSave() {
    const { element, animation } = this.props;
    const currentAnim = this.getCurrentAnim();
    const newAnim = { ...currentAnim };

    // Set current style to current time
    newAnim.times[animation.currentTime][1] = this.state.tmpStyle;
    element.setAttribute('style', this.state.tmpStyle);
    this.setAnimation(newAnim);

    // Insert keyframe to global css on head tag
    const kf = this.generateKeyframes(newAnim);
    insertCss(kf, { id: newAnim.id });

    // Save to store
    this.props.dispatch(setAnimation(newAnim.id, newAnim.times));
  }

  handlePlay() {
    const { element } = this.props;
    const currentAnim = this.getCurrentAnim();
    element.setAttribute('style', currentAnim.times[0][1]);
    element.style.animation = '';
    setTimeout(() => {
      this.setAnimation(currentAnim);
    }, 100);
  }

  handleReset() {
    const { element } = this.props;
    element.setAttribute('style', this.state.tmpStyle);
    this.setAnimation(this.getCurrentAnim());
  }

  render() {
    const { element, animation } = this.props;

    const currentAnim = this.getCurrentAnim();

    if (currentAnim === null) {
      return null;
    }

    const kf = this.generateKeyframes(currentAnim);
    const currentAnimStyle = currentAnim.times[animation.currentTime][1];
    const currentElStyle = this.state.tmpStyle;

    return (
      <BasicPanel title="ANIMATION">
        <div className="flex flex-column justify-center">
          <div className="flex flex-column">
            <span>Timeline</span>
            <div className="flex">
              {currentAnim.times.map((time, i) => (
                <Button
                  icon
                  key={i}
                  className={css['btn-time']}
                  active={animation.currentTime === i}
                  onClick={() => this.handleTimeChange(i)}
                >
                  {time[0]}%
                </Button>
              ))}
              <Button
                icon
                active={currentAnimStyle === currentElStyle}
                className={css['btn-time']}
                onClick={this.handleReset}
              >
                Current
              </Button>
            </div>
          </div>
          <div className="p1 flex flex-column">
            {currentAnimStyle === '' && (
              <div
                className={classNames(
                  'border p1 col col-8 clearfix mx-auto center',
                  css['info-heading']
                )}
              >
                <i className="fas fa-info-circle" /> This timeline has no record
                yet, design and save one!
              </div>
            )}
            {currentAnimStyle !== '' && (
              <div className="border p1 col col-8 clearfix mx-auto center">
                <div className={css['info-heading']}>
                  <i className="fas fa-info-circle" /> Now click the next
                  timeline, change the style to animate, and save!
                </div>
                <br />
                <div>
                  Click 'Play' to preview animation. <br />
                  Click 'CSS' to show the generated keyframe. <br />
                  Go to{' '}
                  <button
                    className={css['btn-link']}
                    onClick={() => this.props.changeView('source')}
                  >
                    Source
                  </button>{' '}
                  menu to get the animation setup.
                </div>
              </div>
            )}
            {/* <div>
              <ul
                className="pl1"
                style={{
                  listStyleType: 'disc',
                }}
              >
                <li>First, select the timeline (0% - 100%) </li>
                <li>Now you can change the style to be animated </li>
                <li>Click 'Save' to record the timeline </li>
                <li>Repeat for the next timeline</li>
                <li>Click 'Play' to play the animation</li>
                <li>Click 'Current' to reset to current style</li>
              </ul>
            </div> */}
            <div className="mt1 flex justify-center">
              <Button
                disabled={currentElStyle === currentAnimStyle}
                onClick={this.handleSave}
              >
                Save
              </Button>
              <Button onClick={this.handlePlay}>Play</Button>

              <SimplePopup trigger={<Button>CSS</Button>} position="top center">
                <SourceViewer text={kf} />
              </SimplePopup>
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
