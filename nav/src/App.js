import React from 'react';

const App = () => {
  const navigate = (url) => {
    history.pushState(null, null, url);
  };

  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        backgroundColor: 'green',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Nav
      </h1>
      <ul>
        <li>
          <button onClick={() => navigate('/')}>EMPTY ROUTE</button>
        </li>
        <li>
          <button onClick={() => navigate('/App2/Demo')}>App2/Demo</button>
        </li>
        <li><button onClick={() => navigate('/App2/Cart')}>App2/Cart</button></li>
      </ul>
    </div>
  );
};

export { App };
