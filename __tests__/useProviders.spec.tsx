// import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { useProviders } from '../src';

import { makeWrapper } from './utils';

describe('useProviders', () => {
  it('should render values for single context', () => {
    const { result } = renderHook(() => useProviders('modal'), {
      wrapper: makeWrapper(),
    });

    // expect(result.current).toBe(true);
  });

  it('should render values for multiple contexts', () => {
    const { result } = renderHook(() => useProviders('modal', 'auth'), {
      wrapper: makeWrapper(),
    });

    // expect(result.current).toBe(true);
  });

  it('should not render values for non-existent context', () => {
    const { result } = renderHook(() => useProviders('settings'), {
      wrapper: makeWrapper(),
    });

    // expect(result.current).toBe(true);
  });

  it('should not render any context values', () => {
    const { result } = renderHook(() => useProviders(), {
      wrapper: makeWrapper(),
    });
  });

  // expect(result.current).toBe(true);
});
