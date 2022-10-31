import React, { useState, useEffect } from 'react';

const useObservable = (observable) => {
  const [value, setValue] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const subscription = observable.subscribe(setValue, setError);
    return () => subscription.unsubscribe();
  }, [observable]);

  return [error, value];
};

export { useObservable };
