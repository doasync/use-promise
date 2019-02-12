const React = require('react');

const { useRef, useEffect, useReducer } = React;

/**
 * Use a promise and receive [data, error, pending] values.
 * Do not forget to memoize the argument
 */

const getPayload = (_, payload) => payload;
const defaultState = [undefined, null, true];

const usePromise = (promise) => {
  const promiseRef = useRef(null);

  const [state, setState] = useReducer(getPayload, defaultState);

  if (promise !== promiseRef.current) {
    if (
      promise !== null
      && typeof promise === 'object'
      && typeof promise.then === 'function'
    ) {
      promiseRef.current = promise;
    } else {
      throw new Error(`expected a promise but got: ${promise}`);
    }
  }

  useEffect(
    () => {
      let canceled = false;

      if (!promise.cache) {
        promise
          .then(result => !canceled && setState([result, null, false]))
          .catch(error => !canceled && setState([undefined, error, false]));
      }

      return () => {
        if (state !== defaultState) {
          setState(defaultState);
        }
        canceled = true;
      };
    },
    [promise],
  );

  // Use cache getter if available
  if (promise.cache) {
    return [promise.cache(), null, false];
  }

  return state;
};

module.exports = {
  usePromise,
};
