import React from "react";
import ReactDOM from "react-dom";
import "materialize-css/dist/css/materialize.min.css";

// Redux imports
import { createStore } from "redux";
import { Provider } from "react-redux";
import { cellReducer } from "./reducers";

import App from "./components/App";

// Create a store to hold all application state
const store = createStore(cellReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
