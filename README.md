# usePromise React hook

[![NPM Version][npm-image]][npm-url] ![NPM Downloads][downloads-image] [![GitHub issues][issues-image]][issues-url] [![Telegram][telegram-image]][telegram-url]

[npm-image]: https://img.shields.io/npm/v/use-promise.svg
[npm-url]: https://www.npmjs.com/package/use-promise
[downloads-image]: https://img.shields.io/npm/dw/use-promise.svg
[issues-image]: https://img.shields.io/github/issues/doasync/use-promise.svg
[issues-url]: https://github.com/doasync/use-promise/issues
[telegram-image]: http://i.imgur.com/WANXk3d.png
[telegram-url]: https://t.me/doasync

### Installation

```bash
npm install use-promise
```

or

```bash
yarn add use-promise
```

### Usage

```js
  const [company] = usePromise(fetchCompanyPromise)
  const [users, usersError, usersLoading] = usePromise(fetchUsersPromise)
```

### Info

This hook supports `promise.cache()` getter, which 

### Author
@doasync
