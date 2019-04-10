import React, { Component } from 'react';


export default class Weather extends Component {

  state= {date: '', time: ''}

  getDate= () => {
    const today= new Date();
    const date= today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); //did not use
    const time= today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.setState({date: date, time: time});
  }

  componentDidMount() {
    setInterval(() => this.getDate(), 1000);
  }

  render() {
    return (
        <div className="weatherContainer">
          <div className="weatherBox">
            <p>{this.props.city}</p>
            <div className="tempAndIcon">
              <span><span className="temp-integer">{this.props.temperature}</span>&#8451;</span>
              <span className="icon-container">
                <img src={this.props.icon} alt="react icon"/>
              </span>
            </div>
              <p className="show-time">{this.state.time}</p>
          </div>
        </div>
    )
  }
}
