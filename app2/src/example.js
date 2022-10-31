import React from 'react';

import { PubSubMFE } from 'utils/PubSubMFE';

const handleClick = (e) => {
  e.preventDefault();
  console.log('The link was clicked.');
  PubSubMFE.get('abc.def').next('Some Data from MFE2 ' + Math.random());
  PubSubMFE.get('abc.def').next('Some Data from MFE2 ' + Math.random());
  PubSubMFE.get('abc.def').next('Some Data from MFE2 ' + Math.random());
  PubSubMFE.get('abc.def').next('Some Data from MFE2 ' + Math.random());
  PubSubMFE.get('abc.def').next('Some Data from MFE2 ' + Math.random());
};

const example = (props) => {
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'orange',
      }}
    >
      <h1>App 2 Single Spa</h1>
      <button onClick={handleClick}>Trigger Event from App 2</button>
    </div>
  );
};

export { example };
