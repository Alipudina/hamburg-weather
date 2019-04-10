import React, { Component } from 'react';

export default class ProfileText extends Component {

  render() {
    return(
      <div className="profile-text">
      <p className="wellcome-text">Welcome to my profile page</p>
      <div className="pesonal-details">
        <p>First name: Ali Mohammad</p>
        <p>Last name: Pudina</p>
        <p>Birthday: 23.07.1982</p>
      </div>
      </div>
    )
  }
}
