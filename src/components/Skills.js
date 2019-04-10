import React, { Component } from 'react';


export default class Skills extends Component {

  render() {
    return (
        <div className="skills-container">

          <div className="title">html</div>
          <div className="skill">
            <div className="html"></div>
          </div>

          <div className="title">css</div>
          <div className="skill">
            <div className="css"></div>
          </div>

          <div className="title">javascript</div>
          <div className="skill">
            <div className="javascript"></div>
          </div>

          <div className="title">react</div>
          <div className="skill">
            <div className="react"></div>
          </div>

          <div className="title">redux</div>
          <div className="skill">
            <div className="redux"></div>
          </div>

        </div>
    )
  }
}
