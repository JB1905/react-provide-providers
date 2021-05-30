import React from 'react';

import { ProvideProviders } from '../src';

const Theme = React.createContext<{ primary?: string }>({ primary: '' });
const Auth = React.createContext<{ isAuthenticated?: boolean }>({
  isAuthenticated: undefined,
});

const providers = {
  theme: <Theme.Provider value={{ primary: 'dark' }} />,
  auth: <Auth.Provider value={{ isAuthenticated: true }} />,
  modal: { show: false, timeout: 300 },
};

// TODO update types
export const makeWrapper = (): React.FC => ({ children }) => (
  <ProvideProviders providers={providers}>{children}</ProvideProviders>
);
