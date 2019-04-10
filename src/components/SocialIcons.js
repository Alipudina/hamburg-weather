import React, { Component } from 'react';

export default class SocialIcons extends Component {


  render() {
    return (
      <div className="social-icons">
        <li className="facebook"><a href="www.myfoto.com"><i className="fab fa-facebook-f"></i></a></li>
        <li className="twitter"><a href="www.myfoto.com"><i className="fab fa-twitter"></i></a></li>
        <li className="insta"><a href="www.myfoto.com"><i className="fab fa-instagram"></i></a></li>
        <li className="gmail"><a href="www.myfoto.com"><i className="fas fa-at"></i></a></li>
        <li className="youtube"><a href="www.myfoto.com"><i className="fab fa-youtube"></i></a></li>
      </div>
    )
  }
}
