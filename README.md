# React `usePromise` hook

[![NPM Version][npm-image]][npm-url] ![NPM Downloads][downloads-image] [![GitHub issues][issues-image]][issues-url] [![Telegram][telegram-image]][telegram-url]

[npm-image]: https://img.shields.io/npm/v/use-promise.svg
[npm-url]: https://www.npmjs.com/package/use-promise
[downloads-image]: https://img.shields.io/npm/dw/use-promise.svg
[issues-image]: https://img.shields.io/github/issues/doasync/use-promise.svg
[issues-url]: https://github.com/doasync/use-promise/issues
[telegram-image]: http://i.imgur.com/WANXk3d.png
[telegram-url]: https://t.me/doasync

An optimized hook for handling promises in React

It supports `promise.cache` property (or function), which is used by some libraries and prevents unnecessary rerenders. You can use it too if you want

### Installation

```bash
npm install use-promise
```

or

```bash
yarn add use-promise
```

### Usage

Wrap a promise in `usePromise` hook and you will get back the following array: `[result, error, pending]`. Use array destructuring to get values that you need:

```js
  const [company] = usePromise(fetchCompanyPromise)
  const [users, usersError, usersLoading] = usePromise(fetchUsersPromise)
```

Do not call an async function inside `usePromise` to get a promise! You will need already prepared promise for this hook. If you don't have a promise, but you want to get it from an async call, then use `useAsyncCall` from [`use-call`](https://www.npmjs.com/package/use-call) package:

```js
const [user, userError, userLoading] = useAsyncCall(fetchUser, 120)
```

`useAsyncCall` hook uses `usePromise` from this package to get promise state

### Tip

If you found this hook useful, please star this package on [GitHub](https://github.com/doasync/use-promise) ★

### Author
@doasync
