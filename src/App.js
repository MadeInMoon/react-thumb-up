import React, { Component } from 'react';
import ThumbUp from './ThumbUp';
import './App.scss';

class App extends Component {

  state = {
    shouldAnimate: true,
  }

  animateThumbUpOnce = () => {
    console.log('animateThumbUpOnce');
    // this.setState({ shouldAnimate: false });
    // setTimeout(() => {
    //   this.setState({ shouldAnimate: true });
    // }, 300);
  }

  render() {
    return (
      <div className="App">
        <a href="https://github.com/MadeInMoon/react-thumb-up">
          <img
            className="github-fork-me"
            src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"
            alt="Fork me on GitHub"
          />
        </a>
        <div className="top">
          <h1>react-thumb-up</h1>
          <h2>A simple react thumb-up animated component, with customizable props.</h2>
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
        <ThumbUp
          className="thumbUp"
          // animateOnMount={false}
          animateOnMount
          onClick={this.animateThumbUpOnce}
          shouldAnimate={this.state.shouldAnimate}
          shirtColor="white"
          // handColor="#e23f3f"
          handColor="#ef4040"
          // thumbColor={this.state.thumbColor}
          // shirtColor={this.state.shirtColor}
          // handColor={this.state.handColor}
          // thumbFillOpacity={this.state.thumbFillOpacity}
        />
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
