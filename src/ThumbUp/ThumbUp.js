/* @flow */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2016-2018 Made in Moon, All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './ThumbUp.scss';

const svgOriginalSize = 456.814;
const svgViewBox = `0 0 ${svgOriginalSize} ${svgOriginalSize}`;


// TODO
const defaultThumbStyles = {
  shirtColor: 'white',
  handColor: '#ef4040',
  fillOpacity: 1,
};
// TODO
const defaultThumbStylesActive = {
  shirtColor: 'white',
  handColor: '#ef4040',
  fillOpacity: 1,
};
// TODO
const defaultThumbStylesUnactive = {
  shirtColor: 'white',
  handColor: 'white',
  fillOpacity: 0.3,
};

const defaultSvgStyle = { // not in the render to avoid new object at each render
  enableBackground: `new ${svgViewBox}`,
};



type ThumbStyleType = {|
  shirtColor: 'string',
  handColor: 'string',
  fillOpacity?: number,
|};


type PropsType = {|
  className?: string | Array<string>,
  /**
   * Should the thumb animates on mount. Only works when thumb is not controlled (default: true)
   */
  animateOnMount: boolean,
  /**
   * Hide the animated dots (default: false)
   */
  disableDots: boolean,
  /**
   * Hide the animated circle (default: false)
   */
  disableCircle: boolean,
  /**
   * Should the thumb animates on mount. Only works when thumb is not controlled (default: true)
   */
  style: Object, // TODO better type?
  svgStyle: Object, // TODO better type?
  circleStyle: Object, // TODO better type?
  /**
   * Should the thumb animates on mount. Only works when thumb is not controlled (default: true)
   */
  thumbStyles: ThumbStyleType | {|
    active: ThumbStyleType,
    unactive: ThumbStyleType,
  |},
  /**
   * Will override the `style`'s width/height is provided (default: 200).
   */
  size?: number,
  /**
   * `onClick` is required when thumb is controlled
   */
  onClick?: ?(isActive?: boolean) => void,
  /**
   * when thumb is controlled
   */
  controlled?: boolean,
  /**
   * when thumb is controlled
   */
  active?: boolean,
|};

type StateType = {|
  /**
   * internal state to handle expend the thumb with animation
   */
  animated: boolean,
  /**
   * internal state to handle expend the thumb without animation
   */
  expended: boolean,
|};


/**
 * ..
 */
class ThumbUp extends PureComponent<PropsType, StateType> {

  static defaultProps = {
    animateOnMount: true,
    disableDots: false,
    disableCircle: false,
    svgStyle: defaultSvgStyle,
    thumbStyles: defaultThumbStyles,
  }

  state = {
    animated: false,
    expended: false,
  }

  onClick = () => {
    const { onClick, controlled, active } = this.props;

    // animate or unactive
    if (controlled && active) {
      // do nothing = reset color with
    }
    else {
      this.animate();
    }

    // onClick props (optional)
    if (typeof onClick === 'function') {
      if (controlled) {
        onClick(!active);
      }
      else {
        onClick();
      }
    }
  }

  animate = () => {
    this.setState({
      animated: false,
      expended: false,
    });
    setTimeout(() => {
      this.setState({
        animated: true,
        expended: false,
      });
    }, 300);
  }

  expend = () => {
    this.setState({
      expended: true,
      animated: false,
    });
  }

  getRootClass = () => {
    const { animated, expended } = this.state;
    const { className, size } = this.props;

    return cx('root', className, {
      expended,
      animated,
    });
  }

  getRootStyles = () => {
    const {
      style,
      size,
    } = this.props;

    let dynamicStyles = {};

    if (size) {
      dynamicStyles.width = `${size}px`;
      dynamicStyles.height = `${size}px`;
    }

    return {
      ...dynamicStyles,
      ...style,
    };
  }

  getSvgStyles = () => {
    const { svgStyle } = this.props;

    return {
      ...defaultSvgStyle,
      ...svgStyle,
    };
  }

  getThumbStyles = () => {
    const {
      thumbStyles,
      // if controlled
      controlled,
      active,
    } = this.props;

    if (controlled) {
      return (active && thumbStyles) ?
        thumbStyles.active || defaultThumbStylesActive :
        thumbStyles.unactive || defaultThumbStylesUnactive
    }
    else if (thumbStyles.handColor) { // This condition is required for flowtype
      return thumbStyles;
    }
    else {
      return defaultThumbStyles;
    }
  }

  getCircleStyles = () => {
    const {
      circleStyle,
      size,
    } = this.props;

    let dynamicStyles = {};

    if (size) {
      dynamicStyles.width = `${size}px`;
      dynamicStyles.height = `${size}px`;
    }

    return {
      ...dynamicStyles,
      ...circleStyle,
    };
  }

  setCustomSize = (size: number) => {
    const dotDistance = size / 1.6;
    const dotDistanceLateral = size / 2.5;
    const circleBorderWidth = size / 2.2222;

    // TODO not possible to update keyframes for adapt distance for a custom width
  }

  componentDidUpdate(prevProps: PropsType) {
    // TODO test update from parent
    if (prevProps.size !== this.props.size && typeof this.props.size === 'number') {
      this.setCustomSize(this.props.size);
    }
  }

  componentDidMount() {
    const { animateOnMount, controlled, onClick, size } = this.props;

    if (!controlled && animateOnMount) {
      this.animate();
    }
    else {
      this.expend();
      // display a warning if thumb is controlled without having a `onClick` props
      if (typeof onClick !== 'function') {
        console.warn('ThumbUp is controlled, but no "onClick" function has been passed as props.') // eslint-disable-line no-console, max-len
      }
    }

    if (typeof size === 'number') {
      this.setCustomSize(size);
    }
    else if (size && typeof size !== 'number') {
      console.warn('Thumb\'s "size" must be a number.') // eslint-disable-line no-console, max-len
    }
  }

  render() {
    const { disableDots, disableCircle } = this.props;

    const rootClass = this.getRootClass();
    const rootStyles = this.getRootStyles();
    const svgStyles = this.getSvgStyles();
    const thumbStyles = this.getThumbStyles();
    const circleStyles = this.getCircleStyles();

    return (
      <div
        className={rootClass}
        onClick={this.onClick}
        style={rootStyles}
      >
        <svg
          className="thumb"
          version="1.1"
          x="0px"
          y="0px"
          width={`${svgOriginalSize}px`}
          height={`${svgOriginalSize}px`}
          viewBox={svgViewBox}
          fillOpacity={thumbStyles.fillOpacity}
          style={svgStyles}
        >
          <g>
            <g>
              <path
                fill={thumbStyles.handColor}
                d="M441.11,252.677c10.468-11.99,15.704-26.169,15.704-42.54c0-14.846-5.432-27.692-16.259-38.547
                c-10.849-10.854-23.695-16.278-38.541-16.278h-79.082c0.76-2.664,1.522-4.948,2.282-6.851c0.753-1.903,1.811-3.999,3.138-6.283
                c1.328-2.285,2.283-3.999,2.852-5.139c3.425-6.468,6.047-11.801,7.857-15.985c1.807-4.192,3.606-9.9,5.42-17.133
                c1.811-7.229,2.711-14.465,2.711-21.698c0-4.566-0.055-8.281-0.145-11.134c-0.089-2.855-0.574-7.139-1.423-12.85
                c-0.862-5.708-2.006-10.467-3.43-14.272c-1.43-3.806-3.716-8.092-6.851-12.847c-3.142-4.764-6.947-8.613-11.424-11.565
                c-4.476-2.95-10.184-5.424-17.131-7.421c-6.954-1.999-14.801-2.998-23.562-2.998c-4.948,0-9.227,1.809-12.847,5.426
                c-3.806,3.806-7.047,8.564-9.709,14.272c-2.666,5.711-4.523,10.66-5.571,14.849c-1.047,4.187-2.238,9.994-3.565,17.415
                c-1.719,7.998-2.998,13.752-3.86,17.273c-0.855,3.521-2.525,8.136-4.997,13.845c-2.477,5.713-5.424,10.278-8.851,13.706
                c-6.28,6.28-15.891,17.701-28.837,34.259c-9.329,12.18-18.94,23.695-28.837,34.545c-9.899,10.852-17.131,16.466-21.698,16.847
                c-4.755,0.38-8.848,2.331-12.275,5.854c-3.427,3.521-5.14,7.662-5.14,12.419v183.01c0,4.949,1.807,9.182,5.424,12.703
                c3.615,3.525,7.898,5.38,12.847,5.571c6.661,0.191,21.698,4.374,45.111,12.566c14.654,4.941,26.12,8.706,34.4,11.272
                c8.278,2.566,19.849,5.328,34.684,8.282c14.849,2.949,28.551,4.428,41.11,4.428h4.855h21.7h10.276
                c25.321-0.38,44.061-7.806,56.247-22.268c11.036-13.135,15.697-30.361,13.99-51.679c7.422-7.042,12.565-15.984,15.416-26.836
                c3.231-11.604,3.231-22.74,0-33.397c8.754-11.611,12.847-24.649,12.272-39.115C445.395,268.286,443.971,261.055,441.11,252.677z"
              />
              <path
                fill={thumbStyles.shirtColor}
                d="M100.5,191.864H18.276c-4.952,0-9.235,1.809-12.851,5.426C1.809,200.905,0,205.188,0,210.137v182.732
                c0,4.942,1.809,9.227,5.426,12.847c3.619,3.611,7.902,5.421,12.851,5.421H100.5c4.948,0,9.229-1.81,12.847-5.421
                c3.616-3.62,5.424-7.904,5.424-12.847V210.137c0-4.949-1.809-9.231-5.424-12.847C109.73,193.672,105.449,191.864,100.5,191.864z
                M67.665,369.308c-3.616,3.521-7.898,5.281-12.847,5.281c-5.14,0-9.471-1.76-12.99-5.281c-3.521-3.521-5.281-7.85-5.281-12.99
                c0-4.948,1.759-9.232,5.281-12.847c3.52-3.617,7.85-5.428,12.99-5.428c4.949,0,9.231,1.811,12.847,5.428
                c3.617,3.614,5.426,7.898,5.426,12.847C73.091,361.458,71.286,365.786,67.665,369.308z"
              />
            </g>
          </g>
        </svg>
        {!disableCircle &&
          <div className="circle-wrap">
            <div className="circle-lg" style={circleStyles} />
          </div>
        }
        {!disableDots &&
          <div className="dots-wrap">
            <div className={cx('dot', 'dot--t')} />
            <div className={cx('dot', 'dot--tr')} />
            <div className={cx('dot', 'dot--br')} />
            <div className={cx('dot', 'dot--b')} />
            <div className={cx('dot', 'dot--bl')} />
            <div className={cx('dot', 'dot--tl')} />
          </div>
        }
      </div>
    );
  }
}


export default ThumbUp;
