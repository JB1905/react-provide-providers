import React from 'react';

import { useProviders } from './useProviders';

export const withProviders = (WrappedComponent: React.ComponentClass) => (
  props: React.ComponentProps<any>
) => <WrappedComponent {...props} {...useProviders()} />;
