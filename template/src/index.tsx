import { Provider } from '@contexts/rootStoreContext';
import rootStore from '@stores/index';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css';

ReactDOM.render(
  <Provider value={rootStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
