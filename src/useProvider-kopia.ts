import { useContext } from 'react';

import { State } from './Provider';

export const useProvider = (
  contexts: string | string[]
): string | object | null => {
  const providers = useContext(State);

  if (typeof contexts === 'string') {
    return providers[contexts];
  } else if (contexts instanceof Array) {
    const data: { [key: string]: object | null } = {};

    contexts.map(context => {
      data[context] = providers[context];
    });

    return data;
  }

  return null;
};
