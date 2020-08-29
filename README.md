# [react-provide-providers](https://github.com/cool-hooks/react-provide-providers)

[![NPM version](http://img.shields.io/npm/v/react-provide-providers?style=flat-square)](https://www.npmjs.com/package/react-provide-providers)
[![NPM downloads](http://img.shields.io/npm/dm/react-provide-providers?style=flat-square)](https://www.npmjs.com/package/react-provide-providers)
[![NPM license](https://img.shields.io/npm/l/react-provide-providers?style=flat-square)](https://www.npmjs.com/package/react-provide-providers)
[![Travis](https://img.shields.io/travis/cool-hooks/react-provide-providers/master?style=flat-square)](https://travis-ci.org/cool-hooks/react-provide-providers)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-provide-providers?style=flat-square)](https://bundlephobia.com/result?p=react-provide-providers)

## About

Solve "wrapper hell" problem in React project

### Similar Projects

- [react-compose-wrappers](https://github.com/kolodny/react-compose-wrappers/) by [Moshe Kolodny](https://github.com/kolodny/)
- [provider-compose](https://github.com/neonxp/compose/) by [Alexander Kiryukhin](https://github.com/neonxp/)

## How to Install

First, install the library in your project by npm:

```sh
$ npm install react-provide-providers
```

Or Yarn:

```sh
$ yarn add react-provide-providers
```

## Getting Started

**• Import `ProvideProviders` from library in your React app, wrap main component and pass providers:**

```js
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { ProvideProviders } from 'react-provide-providers';

import App from './App';

const Theme = React.createContext();
const Auth = React.createContext();

const providers = {
  theme: <Theme.Provider values={{ primary: 'dark' }} />,
  auth: <Auth.Provider values={{ isAuthenticated: true }} />,
  modal: { show: false, timeout: 300 },
};

ReactDOM.render(
  <ProvideProviders providers={providers}>
    <App />
  </ProvideProviders>,
  document.getElementById('root')
);
```

**• Then use `useProviders` Hook:**

```js
// App.js

import React from 'react';
import { useProviders } from 'react-provide-providers';

const App = () => {
  const { theme, auth, modal } = useProviders('theme', 'auth', 'modal');

  return (
    <>
      <p>Primary color: {theme.primary}</p>
      <p>Is authenticated: {auth.isAuthenticated}</p>
      <p>Modal visible: {modal.show}</p>
    </>
  );
};

export default App;
```

**• Or `withProviders` HOC:**

```js
// App.js

import React from 'react';
import { withProviders } from 'react-provide-providers';

const App = (props) => {
  const { theme, auth, modal } = props;

  return (
    <>
      <p>Primary color: {theme.primary}</p>
      <p>Is authenticated: {auth.isAuthenticated}</p>
      <p>Modal visible: {modal.show}</p>
    </>
  );
};

export default withProviders('theme', 'auth', 'modal')(App);
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
