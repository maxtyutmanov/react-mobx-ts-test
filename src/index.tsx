import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { CurrentUserStore } from './stores/currentUserStore';
import { Provider } from 'mobx-react';

const stores = {
  currentUserStore: new CurrentUserStore()
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
