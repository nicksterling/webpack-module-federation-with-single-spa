import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'header',
  app: () => import('header/header'),
  activeWhen: '/',
  customProps: {
    some: 'value',
  },
});

// Config with more expressive API
registerApplication({
  name: 'demo',
  app: () => import('app2/Demo'),
  activeWhen: '/',
  customProps: {
    some: 'value',
  },
});

// Config with more expressive API
registerApplication({
  name: 'nav',
  app: () => import('nav/nav'),
  activeWhen: '/',
  customProps: {
    some: 'value',
  },
});

start();
