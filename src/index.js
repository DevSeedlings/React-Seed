import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import {Provider} from "react-redux";

import Store from './store';

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('react-node');

  if (reactNode) {
    ReactDOM.render(
      <Provider store={ Store }>
        <Router history={ browserHistory }>
          <Route path="/" component={ App }>
          </Route>
        </Router>
      </Provider>
    , reactNode );
  }
});
