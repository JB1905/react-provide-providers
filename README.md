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
import ProvideProviders, { useProviders } from 'react-provide-providers';
```

#### Options
Name | Type | Default | Description
-|-|-|-
**updateOnResize** | boolean | `true` | Update sizes on window resize

#### Returned Values
Name | Type | Description
-|-|-
**vw** | number | Window viewport width
**vh** | number | Window viewport height

## Example

```js
import React from 'react';
import ProvideProviders, { useProviders } from 'react-provide-providers';

const MyReallyHappyWrappedComponent = () => {
  const [] = useProviders();

  return ();
}

const App = () => {
  const providers = {
    
  }

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
