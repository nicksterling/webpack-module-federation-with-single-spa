import React from 'react';

import { CART_ROUTES } from 'app2/routes';

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
          <button onClick={() => navigate('/App2/Demo')}>App2/Demo</button>
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
