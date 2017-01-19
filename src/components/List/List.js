import React from 'react';

import './List.css'

export default class List extends React.Component {
  render() {
    console.log(this.props);

    const items = this.props.list.map((item, index) => (
      <div className="item" key={index}>
        <div className="text">
          {item}
        </div>
        <div className="controlls">
          <div
            className="button"
            onClick={() => this.props.move[this.props.listName](item, this.props.listName)}
          >
            <i className="fa fa-check" aria-hidden="true"></i>
          </div>
          <div
            className="button"
            onClick={() => this.props.delete(item, this.props.listName)}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    ))

    return(
      <div>
        {items}
      </div>
    );
  }
}
