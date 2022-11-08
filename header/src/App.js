import React from 'react';
import { PubSubMFE } from 'utils/PubSubMFE';
import { useObservable } from 'utils/react_hooks';
import { HEADER_USERNAME, HEADER_USERID } from './Constants';

//Set up some initialization logic
const Username = PubSubMFE.get(HEADER_USERNAME);
const UserID = PubSubMFE.get(HEADER_USERID);

const grabUserInfo = () => {
  const min = 1;
  const max = 100;
  const range = Math.floor(Math.random() * (max - min + 1)) + min;

  fetch('https://dummyjson.com/users/' + range)
    .then((res) => res.json())
    .then((res2) => {
      Username.next(res2.firstName + ' ' + res2.lastName);
      UserID.next(res2.ssn);
      console.log(res2);
    });
};

grabUserInfo();

const App = () => {
  const [userError, user] = useObservable(Username);
  const [idError, id] = useObservable(UserID);

  const grabUser = () => {
    grabUserInfo();
  };

  return (
    <div>
      <div>
        <button onClick={grabUser}>Grab New User</button>
        <h1>Header</h1>
        <h3>Username: {user}</h3>
        <h3>User ID: {id}</h3>
      </div>
    </div>
  );
};

export { App };
