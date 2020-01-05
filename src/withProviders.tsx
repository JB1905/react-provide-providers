import React from 'react';

import { useProviders } from './useProviders';

export const withProviders = (...contexts: string[]) => (
  WrappedComponent: React.ComponentClass
) => (props: React.ComponentProps<any>) => (
  <WrappedComponent {...props} {...useProviders(...contexts)} />
);
