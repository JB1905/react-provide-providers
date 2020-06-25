import React from 'react';
import { render } from '@testing-library/react';

import { useProviders } from '../src';

import { composeTree } from './utils';

describe('useProviders', () => {
  it('should render values for single context', () => {
    const Component: React.FC = () => {
      const providers = useProviders('modal');

      return <p>{JSON.stringify(providers)}</p>;
    };

    const { container } = render(composeTree(Component));

    expect(container.firstChild!.textContent!).toBe(
      '{"show":false,"timeout":300}'
    );
  });

  it('should render ', () => {
    const Component: React.FC = () => {
      const providers = useProviders('modal', 'auth');

      return <p>{JSON.stringify(providers)}</p>;
    };

    const { container } = render(composeTree(Component));

    expect(container.firstChild!.textContent!).toBe(
      '{"modal":{"show":false,"timeout":300},"auth":{"isAuthenticated":true}}'
    );
  });

  it('should render values for multiple contexts', () => {
    const Component: React.FC = () => {
      const providers = useProviders('settings');

      return <p>{JSON.stringify(providers)}</p>;
    };

    const { container } = render(composeTree(Component));

    expect(container.firstChild!.textContent!).toBe('null');
  });

  it('should not render any context values', () => {
    const Component: React.FC = () => {
      const providers = useProviders();

      return <p>{JSON.stringify(providers)}</p>;
    };

    const { container } = render(composeTree(Component));

    expect(container.firstChild!.textContent!).toBe('null');
  });
});
