import React from 'react';
import { render } from '@testing-library/react';

import { ProvideProviders, useProviders } from '../src';

describe('useProviders', () => {
  const Theme = React.createContext<{ primary?: string }>({ primary: '' });
  const Auth = React.createContext<{ isAuthenticated?: boolean }>({
    isAuthenticated: undefined,
  });

  const providers = {
    theme: <Theme.Provider value={{ primary: 'dark' }} />,
    auth: <Auth.Provider value={{ isAuthenticated: true }} />,
    modal: { show: false, timeout: 300 },
  };

  const renderTree = (Component: React.FC) => (
    <ProvideProviders providers={providers}>
      <Component />
    </ProvideProviders>
  )

  it('should render values for single context', () => {
    const Component: React.FC = () => {
      const providers = useProviders('modal');

      return <p>{JSON.stringify(providers)}</p>;
    };

    const { container } = render(renderTree(Component));

    expect(container.firstChild!.textContent!).toBe(
      '{"show":false,"timeout":300}'
    );
  });

  it('should render ', () => {
    const Component: React.FC = () => {
      const providers = useProviders('modal', 'auth');

      return <p>{JSON.stringify(providers)}</p>;
    };

    const { container } = render(renderTree(Component));

    expect(container.firstChild!.textContent!).toBe(
      '{"modal":{"show":false,"timeout":300},"auth":{"isAuthenticated":true}}'
    );
  });

  it('should render values for multiple contexts', () => {
    const Component: React.FC = () => {
      const providers = useProviders('settings');

      return <p>{JSON.stringify(providers)}</p>;
    };

    const { container } = render(renderTree(Component));

    expect(container.firstChild!.textContent!).toBe('null');
  });

  it('should not render any context values', () => {
    const Component: React.FC = () => {
      const providers = useProviders();

      return <p>{JSON.stringify(providers)}</p>;
    };

    const { container } = render(renderTree(Component));

    expect(container.firstChild!.textContent!).toBe('null');
  });
});
