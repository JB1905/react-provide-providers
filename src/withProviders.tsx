import React from 'react';

import { useProviders } from './useProviders';

export function withProviders() {
  return <T,>(WrappedComponent: React.ComponentType<T>) => (props: T) => (
    <WrappedComponent {...props} {...useProviders()} />
  );
}
