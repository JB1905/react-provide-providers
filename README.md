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
**• Import hook in React application file:**
```js
import { ProvideProviders, useProviders } from 'react-provide-providers';
```

#### Options
Name | Type | Default | Description
-|-|-|-

#### Returned Values
Name | Type | Description
-|-|-

## Example

```js
import React from 'react';
import { ProvideProviders, useProviders } from 'react-provide-providers';

const MyReallyHappyWrappedComponent = () => {
  const { theme, auth } = useProviders('theme', 'auth');

  return (
    <>
      <p>Primary color: {theme.primary}</p>
      <p>Is authenticated: {auth.isAuthenticated}</p>
    </>
  );
}

const Theme = React.createContext();
const Auth = React.createContext();

const App = () => {
  const providers = {
    theme: <Theme.Provider values={{ primary: "dark" }} />,
    auth: <Auth.Provider values={{ isAuthenticated: true }} />
  };

  return (
    <ProvideProviders providers={providers}>
      <MyReallyHappyWrappedComponent />
    </ProvideProviders>
  );
}

export default App;
```

## License
This project is licensed under the MIT License © 2020-present Jakub Biesiada
