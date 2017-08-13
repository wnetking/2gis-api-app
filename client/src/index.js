import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.less';

import Routes from './routes';
import {Provider} from 'react-redux'
import registerServiceWorker from './utils/registerServiceWorker';

//store
import configureStore from './store'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
document.getElementById('root')
);

registerServiceWorker();
