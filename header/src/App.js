import React, { Suspense, useEffect, useState } from 'react';
import { PubSubMFE } from 'utils/PubSubMFE';
import { useObservable } from 'utils/react_hooks';
import { HEADER_USERNAME, HEADER_USERID } from 'utils/Constants';

//Set up some initialization logic
const Username = PubSubMFE.get(HEADER_USERNAME);
const UserID = PubSubMFE.get(HEADER_USERID);

//Set the username for anyone who cares
Username.next('Jean-Luc Picard');
UserID.next('1701-D');

const App = () => {
  const [userError, user] = useObservable(Username);
  const [idError, id] = useObservable(UserID);

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
        <h1>Header</h1>
        <h3>Username: {user}</h3>
        <h3>User ID: {id}</h3>
      </div>
    </div>
  );
};

export { App };
