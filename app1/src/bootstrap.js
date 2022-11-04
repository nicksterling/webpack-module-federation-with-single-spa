import { registerApplication, start } from 'single-spa';
import { CART_ROUTES, DEMO_ROUTES } from 'app2/routes';

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
  activeWhen: DEMO_ROUTES.DEMO.URL,
  customProps: {
    some: 'value',
  },
});

registerApplication({
  name: 'cart',
  app: () => import('app2/Cart'),
  activeWhen: CART_ROUTES.CART.URL,
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
