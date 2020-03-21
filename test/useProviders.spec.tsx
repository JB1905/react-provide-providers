import React from 'react';
import { render } from '@testing-library/react';

import { ProvideProviders, useProviders } from '../src';

describe('useProviders', () => {
  const Component = () => {
    const providers = useProviders('modal');

    return <p>{JSON.stringify(providers)}</p>;
  };

  const Theme = React.createContext<{ primary?: string }>({ primary: '' });
  const Auth = React.createContext<{ isAuthenticated?: boolean }>({
    isAuthenticated: undefined
  });

  const providers = {
    theme: <Theme.Provider value={{ primary: 'dark' }} />,
    auth: <Auth.Provider value={{ isAuthenticated: true }} />,
    modal: { show: false, timeout: 300 }
  };

  const tree = (
    <ProvideProviders providers={providers}>
      <Component />
    </ProvideProviders>
  );

  it('should', () => {
    const { container } = render(tree);

    expect(container.firstChild!.textContent!).toBe(
      '{"show":false,"timeout":300}'
    );
  });
});

describe('useProviders', () => {
  const Component = () => {
    const providers = useProviders('modal', 'auth');

    return <p>{JSON.stringify(providers)}</p>;
  };

  const Theme = React.createContext<{ primary?: string }>({ primary: '' });
  const Auth = React.createContext<{ isAuthenticated?: boolean }>({
    isAuthenticated: undefined
  });

  const providers = {
    theme: <Theme.Provider value={{ primary: 'dark' }} />,
    auth: <Auth.Provider value={{ isAuthenticated: true }} />,
    modal: { show: false, timeout: 300 }
  };

  const tree = (
    <ProvideProviders providers={providers}>
      <Component />
    </ProvideProviders>
  );

  it('should', () => {
    const { container } = render(tree);

    expect(container.firstChild!.textContent!).toBe(
      '{"modal":{"show":false,"timeout":300},"auth":{"isAuthenticated":true}}'
    );
  });
});

describe('useProviders', () => {
  const Component = () => {
    const providers = useProviders('settings');

    return <p>{JSON.stringify(providers)}</p>;
  };

  const Theme = React.createContext<{ primary?: string }>({ primary: '' });
  const Auth = React.createContext<{ isAuthenticated?: boolean }>({
    isAuthenticated: undefined
  });

  const providers = {
    theme: <Theme.Provider value={{ primary: 'dark' }} />,
    auth: <Auth.Provider value={{ isAuthenticated: true }} />,
    modal: { show: false, timeout: 300 }
  };

  const tree = (
    <ProvideProviders providers={providers}>
      <Component />
    </ProvideProviders>
  );

  it('should', () => {
    const { container } = render(tree);

    expect(container.firstChild!.textContent!).toBe('null');
  });
});

describe('useProviders', () => {
  const Component = () => {
    const providers = useProviders();

    return <p>{JSON.stringify(providers)}</p>;
  };

  const Theme = React.createContext<{ primary?: string }>({ primary: '' });
  const Auth = React.createContext<{ isAuthenticated?: boolean }>({
    isAuthenticated: undefined
  });

  const providers = {
    theme: <Theme.Provider value={{ primary: 'dark' }} />,
    auth: <Auth.Provider value={{ isAuthenticated: true }} />,
    modal: { show: false, timeout: 300 }
  };

  const tree = (
    <ProvideProviders providers={providers}>
      <Component />
    </ProvideProviders>
  );

  it('should', () => {
    const { container } = render(tree);

    expect(container.firstChild!.textContent!).toBe('null');
  });
});
