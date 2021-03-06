import React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import rootReducer from "./reducers/root.reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

import App from "./App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
