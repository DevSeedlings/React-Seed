import React from 'react';
import {Link} from 'react-router';

import './NavBar.css'

export default class NavBar extends React.Component {
  render() {
    return(
      <div className="navBar">
        <h1>TODO</h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/dash">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    );
  }
}
