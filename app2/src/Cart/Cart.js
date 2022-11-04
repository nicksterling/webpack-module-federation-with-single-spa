import React from 'react';

import { PubSubMFE } from 'utils/PubSubMFE';
import { useObservable } from 'utils/react_hooks';
import { HEADER_USERNAME } from 'utils/Constants';

// console.log('APP 2 MFE Loaded');

const Cart = (props) => {
  // console.log('APP 2 MFE RENDERING');
  const [err, username] = useObservable(PubSubMFE.get(HEADER_USERNAME));
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'lightblue',
      }}
    >
      <h1>App 2 - Cart (React)</h1>
      <h3>The current user is: {username} </h3>
    </div>
  );
};

export { Cart };
