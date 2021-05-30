import { renderHook } from '@testing-library/react-hooks';

import { useProviders } from '../src';

import { makeWrapper } from './utils';

describe('useProviders', () => {
  it('should render values for single context', () => {
    const { result } = renderHook(() => useProviders('modal'), {
      wrapper: makeWrapper(),
    });

    expect(JSON.stringify(result.current)).toBe(
      JSON.stringify({ show: false, timeout: 300 })
    );
  });

  it('should render values for multiple contexts', () => {
    const { result } = renderHook(() => useProviders('modal', 'auth'), {
      wrapper: makeWrapper(),
    });

    expect(JSON.stringify(result.current)).toBe(
      JSON.stringify({
        modal: { show: false, timeout: 300 },
        auth: { isAuthenticated: true },
      })
    );
  });

  it('should not render values for non-existent context', () => {
    const { result } = renderHook(() => useProviders('settings'), {
      wrapper: makeWrapper(),
    });

    expect(result.current).toBe(null);
  });

  it('should not render any context values', () => {
    const { result } = renderHook(() => useProviders(), {
      wrapper: makeWrapper(),
    });

    expect(result.current).toBe(null);
  });
});
