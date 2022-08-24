import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import App from "App";
import reduxThunk from "redux-thunk";
import { SoftUIControllerProvider } from "context";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  auth: { userId: userInfoFromStorage },
};
const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <SoftUIControllerProvider>
        <App />
      </SoftUIControllerProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
