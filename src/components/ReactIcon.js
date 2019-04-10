import React, { Component } from 'react';
import logo from '../logo.svg';


// <code>src/App.js</code>
export default class ReactIcon extends Component {

  render() {
    return (
      <>
        <div className="App total-height">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </>
    )
  }
}
