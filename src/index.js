import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

import "bulma/css/bulma.css";
import "./styles.scss";

import redux from "redux";
import { createStore } from "redux";

//import reducers and actions
import reducer from "./reducers/reducer.js";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
