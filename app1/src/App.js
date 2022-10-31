import React, { Suspense, useEffect, useState } from 'react';
import { PubSubMFE } from 'utils/PubSubMFE';
import { useObservable } from 'utils/react_hooks';
const RemoteApp = React.lazy(() => import('app2/App'));

const App = () => {
  const [error, stuff] = useObservable(PubSubMFE.get('abc.def'));

  if (!stuff) {
    return <p>Starting request ...</p>;
  }
  if (error) {
    return <p>There has been an error: {error.message}</p>;
  }

  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>{stuff}</h1>
      </div>
      <Suspense fallback={'loading...'}>
        <RemoteApp />
      </Suspense>
    </div>
  );
};

export default App;
