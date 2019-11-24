import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import persistState from "redux-localstorage";

import "bulma/css/bulma.css";
import "./styles.scss";

import redux from "redux";
import { compose, createStore, applyMiddleware } from "redux";

//import reducers and actions
import reducer from "./reducers/reducer.js";

const enhancer = compose(applyMiddleware(logger), persistState());

const store = createStore(reducer, enhancer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
