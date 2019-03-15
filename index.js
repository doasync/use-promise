import { useReducer, useEffect } from "react";

type State<T> = [T | null, Error | null, boolean];

type Action<T> =
  | { type: "resolved", value: T }
  | { type: "rejected", error: Error };

function reducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case "resolved": {
      return [action.value, null, true];
    }
    case "rejected": {
      return [null, action.error, true];
    }
    default: {
      throw new Error(`Unexpected action type ${action.type}`);
    }
  }
}

/**
 * A simple [React Hook]{@link https://reactjs.org/docs/hooks-intro.html} for
 * using Promise values in React render
 * @example
 * const [result, error, settled] = usePromise(() => Promise.resolve(1), [])
 * // First render
 * // settled === false, result === null, error === null
 * // Second render
 * // settled === true, result === 1, error === null
 */
export default function usePromise<T>(
  promiseCreator: () => Promise<T>,
  deps?: Array<*>
): State<T> {
  const [state, dispatch] = useReducer(reducer, [null, null, false]);
  useEffect(() => {
    const promise = promiseCreator();
    promise.then(value => dispatch({ type: "resolved", value }));
    promise.catch(error => dispatch({ type: "rejected", error }));
  }, deps);
  return state;
}
