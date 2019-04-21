import { useRef, useEffect } from 'react';

export const makeCancelable = (promise) => {
  let isCanceled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise
      .then(val => (isCanceled ? reject(new Error({ isCanceled })) : resolve(val)))
      .catch(error => (isCanceled ? reject(new Error({ isCanceled })) : reject(error)));
  });

  return {
    promise: wrappedPromise,
    cancel() {
      isCanceled = true;
    },
  };
}

export const useCancellablePromise = (cancelable = makeCancelable) => {
  const emptyPromise = Promise.resolve(true);

  // test if the input argument is a cancelable promise generator
  if (cancelable(emptyPromise).cancel === undefined) {
    throw new Error('promise wrapper argument must provide a cancel() function')
  }

  const promises = useRef();

  useEffect(
    () => {
      promises.current = promises.current || [];
      return () => {
        promises.current.forEach(p => p.cancel());
        promises.current = [];
      };
    }, []
  );

  const cancellablePromise = (p) =>  {
    const cPromise = cancelable(p);
    promises.current.push(cPromise);
    return cPromise.promise;
  };

  return { cancellablePromise };
}