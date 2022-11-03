import React, { Suspense, useEffect, useState } from 'react';
import { PubSubMFE } from 'utils/PubSubMFE';
import { useObservable } from 'utils/react_hooks';

const App = () => {
  const [error, stuff] = useObservable(PubSubMFE.get('abc.def'));

  // if (!stuff) {
  //   return <p>Header</p>;
  // }
  // if (error) {
  //   return <p>There has been an error: {error.message}</p>;
  // }

  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'red',
        }}
      >
        <h1>Header: {stuff}</h1>
      </div>
    </div>
  );
};

export { App };
