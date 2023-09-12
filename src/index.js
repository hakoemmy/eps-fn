import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from "react-redux";
import store from "redux/store";
import dotenv from "dotenv";
import Routes from "./routes";
import reportWebVitals from './reportWebVitals';

dotenv.config();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
