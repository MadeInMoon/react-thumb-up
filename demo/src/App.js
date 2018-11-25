/* @flow */
import React, { Component } from 'react';
import ThumbUp from '../../dist/ThumbUp';
import './App.scss';


type PropsType = {||};

type StateType = {|
  controlledThumbIsActive: boolean,
|};


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
                  shirtColor: 'white',
                  handColor: '#ef4040',
                  // fillOpacity: 1,
                }}
                // thumbColor={this.state.thumbColor}
                // shirtColor={this.state.shirtColor}
                // handColor={this.state.handColor}
                // thumbFillOpacity={this.state.thumbFillOpacity}
              />
            </div>
            <div className="thumb-wrapper">
              <p className="thumb-label">Controlled</p>
              <ThumbUp
                className="thumbUp"
                controlled
                active={this.state.controlledThumbIsActive}
                onClick={this.onClickControlled}
                // thumbStyles={{
                //   active: {
                //     shirtColor: 'white',
                //     handColor: '#ef4040',
                //     fillOpacity: 1,
                //   },
                //   unactive: {
                //     shirtColor: 'white',
                //     handColor: 'white',
                //     fillOpacity: 0.3,
                //   },
                // }}
              />
            </div>
          <div className="thumb-wrapper">
            <p className="thumb-label">Size {'{50}'}</p>
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
