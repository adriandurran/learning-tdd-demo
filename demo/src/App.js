import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  decButton = (e) => {
    const { counter } = this.state;
    if (counter <= 0) {
      console.log('no below zero');
      return;
    }
    this.setState({ counter: counter - 1 });
  };

  render() {
    const { counter } = this.state;

    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {counter}</h1>
        {counter <= 0 && (
          <p style={{ textColour: 'red' }}>You cannot go below zero!</p>
        )}
        <button
          data-test="increment-button"
          onClick={() => this.setState({ counter: counter + 1 })}
        >
          Increment
        </button>
        <button data-test="decrement-button" onClick={() => this.decButton()}>
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
