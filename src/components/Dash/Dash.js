import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addItem, workItem, completeItem, deleteItem} from './../../ducks/listDuck';

import List from './../List/List';

import './Dash.css';

class Dash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
    };

    this.addToList = this.addToList.bind(this);
  }

  addToList(event) {
    event.preventDefault();

    this.props.addItem(this.state.newItem);
    this.setState({
      newItem: '',
    });
  }

  handleChange(field, event) {
    this.setState({
      [field]: event.target.value
    })
  }

  render() {
    const lists = [];

    for (let list in this.props.lists) {
      lists.push(
        <div
          className="list"
          key={list}
        >
          <h3>{list[0].toUpperCase() + list.slice(1)}</h3>
          <hr />
          <List
            delete={this.props.deleteItemFromList}
            move={{
              todo: this.props.moveToWorking,
              working: this.props.moveToCompleted,
              competed: this.props.deleteItemFromList
            }}
            list={this.props.lists[list]}
            listName={list}
          />
        </div>
      );
    }

    return(
      <div>
        {lists}
        <div className="input">
          <form onSubmit={this.addToList}>
            <input
              placeholder="New Todo"
              type='text'
              value={this.state.newItem}
              onChange={this.handleChange.bind(this, 'newItem')}
            />
            <button type='submit'>
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

var mapStateToProps = function(state) {
  return {
    lists: state.list
  }
};

var mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    addItem: addItem,
    moveToWorking: workItem,
    moveToCompleted: completeItem,
    deleteItemFromList: deleteItem
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
