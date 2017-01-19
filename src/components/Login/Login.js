import React from 'react';
import {connect} from 'react-redux';

class Login extends React.Component {
  render() {
    return(
      <div>
        Login
      </div>
    );
  }
}

var connectPrefrences = function(state) {
  return {
    item: state.item
  }
};

export default /*connect(connectPrefrences)*/(Login);
