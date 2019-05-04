import React, { Component } from 'react';


export default class Loader extends Component {


  render() {
    return (
        <div className="weatherContainer">
          <div className="weatherBox loaderBox">
            <div className="loader">
              <div className="fetching-data">
                <p>fetching</p>
                <p>data</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
