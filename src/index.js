import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import RootReducers from './Reducers';
import App from "./App";


const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={createStore(RootReducers, devToolsEnhancer())}>
      <App />
    </Provider>,
  rootElement
);
