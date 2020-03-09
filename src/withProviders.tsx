import React from 'react';

import { useProviders } from './useProviders';

export const withProviders = (...contexts: string[]) => (
  WrappedComponent: React.ComponentType<any>
) => (props: React.ComponentProps<any>) => (
  <WrappedComponent {...props} {...useProviders(...contexts)} />
);
