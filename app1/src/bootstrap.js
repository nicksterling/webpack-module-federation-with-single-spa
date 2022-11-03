import { registerApplication, start } from 'single-spa';
import * as header from 'header/header';
// import * as Demo from 'app2/Demo';
import * as nav from 'nav/nav';

registerApplication({
  name: 'header',
  app: header,
  activeWhen: '/',
  customProps: {
    some: 'value',
  },
});

// Config with more expressive API
registerApplication({
  name: 'demo',
  app: () => import('app2/Demo'),
  activeWhen: '/app2/Demo',
  customProps: {
    some: 'value',
  },
});

// Config with more expressive API
registerApplication({
  name: 'nav',
  app: nav,
  activeWhen: '/',
  customProps: {
    some: 'value',
  },
});

start();
