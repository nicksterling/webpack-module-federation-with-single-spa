import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'header',
  app: () => import('header/header'),
  activeWhen: '/',
  customProps: {
    some: 'value',
  },
});

registerApplication({
  name: 'demo',
  app: () => import('app2/Demo'),
  activeWhen: '/app2/Demo',
  customProps: {
    some: 'value',
  },
});

registerApplication({
  name: 'cart',
  app: () => import('app2/Cart'),
  activeWhen: '/app2/Cart',
  customProps: {
    some: 'value',
  },
});

registerApplication({
  name: 'nav',
  app: () => import('nav/nav'),
  activeWhen: '/',
  customProps: {
    some: 'value',
  },
});

start();
