import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import {Provider} from "react-redux";

import Store from './store';
import App from "./components/App/App";
import Home from "./components/Home/Home";
import Dash from "./components/Dash/Dash";
import Login from "./components/Login/Login";

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('react-node');

  if (reactNode) {
    ReactDOM.render(
      <Provider store={ Store }>
        <Router history={ browserHistory }>
          <Route path="/" component={ App }>
            <Route path="/home" component={ Home }></Route>
            <Route path="/dash" component={ Dash }></Route>
            <Route path="/login" component={ Login }></Route>
          </Route>
        </Router>
      </Provider>
    , reactNode );
  }
});
