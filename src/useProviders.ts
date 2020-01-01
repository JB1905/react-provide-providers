import { useContext } from 'react';

import { State } from './Provider';

export const useProviders = (...contexts: string[]): string | object | null => {
  const providers = useContext(State);

  if (contexts.length === 1 && providers[contexts[0]]) {
    return providers[contexts[0]];
  } else if (contexts.length > 0) {
    const data: { [key: string]: object | null } = {};

    contexts.map(context => {
      if (providers[context]) {
        data[context] = providers[context];
      }
    });

    return Object.keys(data).length > 0 ? data : null;
  }

  return null;
};
