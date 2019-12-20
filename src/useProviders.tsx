import { useContext } from 'react';

import { State } from './Provider';

export const useProviders = () => {
  const context = useContext(State);

  return context;
};
