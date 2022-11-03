import React from 'react';

const App = () => {
  const navigate = (url) => {
    history.pushState(null, null, '/App2/Demo');
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
          <button onClick={() => navigate('/a')}>Click me!</button>
        </li>
      </ul>
    </div>
  );
};

export { App };
