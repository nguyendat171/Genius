/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import reportWebVitals from 'reportWebVitals';
import { Provider } from 'react-redux';
import { App } from 'app';
import { store } from 'store/configureStore';
import 'sanitize.css/sanitize.css'; // Use consistent styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.scss';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
