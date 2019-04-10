import React, { Component } from 'react';
import myFoto from '../images/myfoto.jpeg'


export default class Foto extends Component {
  state= {}

  // componentDidMount() {
  //   setInterval(() => this.getDate(), 1000);
  // }

  render() {
    return (
        <div className="foto-container">
          <div className="">
            <img src={myFoto} alt="my foto"/>
          </div>
        </div>
    )
  }
}
