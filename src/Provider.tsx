import React, { ReactChild } from 'react';

interface Props {
  readonly providers: { [key: string]: any };
  readonly children: ReactChild | ReactChild[];
}

export const State = React.createContext<{ [key: string]: any }>({});

export const ProvideProviders = ({ providers, children }: Props) => {
  const state = {} as { [key: string]: any };

  Object.entries(providers).map(provider => {
    state[provider[0]] = provider[1].props.value;
  });

  return <State.Provider value={state}>{children}</State.Provider>;
};
