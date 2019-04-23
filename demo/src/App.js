/* @flow */
import React, { Component } from 'react';
import tinycolor from 'tinycolor2';
import styled, { css, keyframes } from 'styled-components'
import ThumbUp from '../../dist/ThumbUp';
import './App.scss';

export const shirtColor = 'white';
export const handColor = '#ef4040';

export const customDotsColors = [
  tinycolor(handColor).lighten(5).toString(),
  tinycolor(handColor).lighten(30).toString(),
  tinycolor(handColor).lighten(5).toString(),
  tinycolor(handColor).lighten(30).toString(),
  tinycolor(handColor).lighten(5).toString(),
  tinycolor(handColor).lighten(30).toString(),
];


type PropsType = {||};

type StateType = {|
  controlledThumbIsActive: boolean,
|};




const pulse = (props) => {
  console.log(props);
  return keyframes`
      0% {
        // opacity: 0;
        background-color: ${props.color} !important;
        // background: red !important;
        // padding: 20px,
      }
      100% {
        // opacity: 1;
        background-color: ${props.color} !important;
        // background: red !important;
        // padding: 20px,
      }
    `
  ;
};

const animation = (props) =>
  css`
    ${pulse} ${props.animationLength} infinite alternate;
    /* background: ${props.color} !important; */
    /* background: blue; */
  `;

const PulseButton = styled.div`
  animation: ${animation};
`;



class App extends Component<PropsType, StateType> {

  state = {
    controlledThumbIsActive: false,
  }

  onClick = () => {
    console.log('onClick');
  }

  onClickControlled = (isActive: boolean) => {
    this.setState({ controlledThumbIsActive: isActive });

  }

  render() {

    return (
      <div className="App">
        <a href="https://github.com/MadeInMoon/react-thumb-up" target="new_blank">
          <img
            className="github-fork-me"
            src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"
            alt="Fork me on GitHub"
          />
        </a>

        <div style={{ padding: '4em', backgroundColor: 'white' }}>
          <PulseButton animationLength="1s" color="red">
            <p>Keyframe test</p>
          </PulseButton>
        </div>


        <div className="top">
          <h1>react-thumb-up</h1>
          <h2>A simple react thumb-up animated component, with customizable props, to like with confidence</h2>
          <a
            className="github-button"
            href="https://github.com/MadeInMoon/react-thumb-up"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star MadeInMoon/react-thumb-up on GitHub"
          >
            Star
          </a>
        </div>
        <div className="middle">
          <div className="thumb-wrapper">
            <p className="thumb-label">Uncontrolled</p>
            <ThumbUp
              className="thumbUp"
              animateOnMount
              // onClick={this.onClick}

              thumbStyles={{
                shirtColor: shirtColor,
                handColor: handColor,
                // fillOpacity: 1,
              }}
              dotsColors={customDotsColors}
              // dotsColor={primary}
            />
          </div>
          <div className="thumb-wrapper">
            <p className="thumb-label">Controlled</p>
            <ThumbUp
              className="thumbUp"
              controlled
              active={this.state.controlledThumbIsActive}
              onClick={this.onClickControlled}
              thumbStyles={{
                active: {
                  shirtColor: shirtColor,
                  handColor: handColor,
                  fillOpacity: 1,
                },
                unactive: {
                  shirtColor: 'white',
                  handColor: 'white',
                  fillOpacity: 0.3,
                },
              }}
              dotsColors={customDotsColors}
            />
          </div>
          <div className="thumb-wrapper">
            <p className="thumb-label">Size {'{100}'}</p>
            <ThumbUp
              className="thumbUp"
              size={100}
              style={{
                height: '200px',
              }}
              // circleStyle={{
              //   width: '50px',
              //   height: '50px',
              // }}
            />
          </div>
        </div>
        <div className="bottom">
          <h3>
            Wrapped with <span role="img" aria-label="love">❤️</span> by
            {` `}
            <a
              href="https://www.madeinmoon.io"
              alt="Link to Made in Moon"
              target="new_blank"
            >
              Made in Moon
            </a>
          </h3>
        </div>
      </div>
    );
  }
}

export default App;
