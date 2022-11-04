import React from 'react';

import { CART_ROUTES, DEMO_ROUTES } from 'shopping/routes';

const App = () => {
  const navigate = (url) => {
    history.pushState(null, null, url);
  };

  return (
    <div>
      <h1>Nav</h1>
      <ul>
        <li>
          <button onClick={() => navigate('/')}>EMPTY ROUTE</button>
        </li>
        <li>
          <button onClick={() => navigate(DEMO_ROUTES.DEMO.URL)}>
            {DEMO_ROUTES.DEMO.NAME}
          </button>
        </li>
        <li>
          <button onClick={() => navigate(CART_ROUTES.CART.URL)}>
            {CART_ROUTES.CART.NAME}
          </button>
        </li>
      </ul>
    </div>
  );
};

export { App };
