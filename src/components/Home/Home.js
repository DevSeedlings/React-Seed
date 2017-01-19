import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {
  render() {
    return(
      <div>
        Home
      </div>
    );
  }
}

// var connectPrefrences = function(state) {
//   return {
//     item: state.item
//   }
// };
//
export default /*connect(connectPrefrences)*/(Home);
