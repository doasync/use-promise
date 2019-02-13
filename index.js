/* eslint-disable promise/always-return */

const { useRef, useState, useEffect } = require('react');

const isPromise = x => x !== null && typeof x === 'object' && typeof x.then === 'function';
const defaultState = [undefined, null, true];

const usePromise = (promise) => {
  const self = useRef({ state: defaultState }).current;
  const [, pushState] = useState();

  if (promise !== self.promise) {
    if (isPromise(promise)) {
      self.promise = promise;
      const cache = typeof promise.cache === 'function' ? promise.cache() : promise.cache;
      self.state = cache ? [cache, null, false] : defaultState;
    } else {
      throw new Error(`expected a promise but got: ${typeof promise}`);
    }
  }

  useEffect(
    () => {
      let isValid = true;

      if (!promise.cache) {
        promise
          .then((result) => {
            self.state = [result, null, false];
            if (isValid) pushState(self.state);
          })
          .catch((error) => {
            self.state = [undefined, error, false];
            if (isValid) pushState(self.state);
          });
      }

      return () => {
        self.state = defaultState;
        isValid = false;
      };
    },
    [promise],
  );

  return self.state;
};

module.exports = {
  usePromise,
};
