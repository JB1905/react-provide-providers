import React from 'react';

interface Props {
  readonly providers: { [key: string]: any };
}

export const State = React.createContext<{ [key: string]: any }>({});

export const ProvideProviders: React.FC<Props> = ({ providers, children }) => {
  const state = {} as { [key: string]: any };

  Object.entries(providers).map(([key, value]) => {
    state[key] = value.props ? value.props.value : value;
  });

  return <State.Provider value={state}>{children}</State.Provider>;
};
