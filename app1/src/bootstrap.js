import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

import { registerApplication, start } from 'single-spa';

// Config with more expressive API
registerApplication({
  name: 'demo',
  app: () => import('app2/Demo'),
  activeWhen: '/',
  customProps: {
    some: 'value',
  },
});

start();

ReactDOM.render(<App />, document.getElementById('root'));
