# [react-provide-providers](https://github.com/jb1905/react-provide-providers)

[![NPM version](http://img.shields.io/npm/v/react-provide-providers.svg?style=flat-square)](https://www.npmjs.com/package/react-provide-providers)
[![NPM downloads](http://img.shields.io/npm/dm/react-provide-providers.svg?style=flat-square)](https://www.npmjs.com/package/react-provide-providers)

## About
Solve "wrapper hell" problem in React project

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
  theme: <Theme.Provider values={{ primary: "dark" }} />,
  auth: <Auth.Provider values={{ isAuthenticated: true }} />
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
  const { theme, auth } = useProviders('theme', 'auth');

  return (
    <>
      <p>Primary color: {theme.primary}</p>
      <p>Is authenticated: {auth.isAuthenticated}</p>
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

const App = props => {
  const { theme, auth } = props;

  return (
    <>
      <p>Primary color: {theme.primary}</p>
      <p>Is authenticated: {auth.isAuthenticated}</p>
    </>
  );
};

export default withProviders('theme', 'auth')(App);
```

## License
This project is licensed under the MIT License © 2020-present Jakub Biesiada
