import React, { Context } from 'react';

interface Props {
  providers: { [key: string]: any };
  // providers: { [key: string]: Context<any> };
  children: any;
}

export const State = React.createContext<{ [key: string]: any }>({});

export const ProvideProviders = ({ providers, children }: Props) => {
  const state = {} as { [key: string]: any };

  Object.entries(providers).map(provider => {
    // console.log(provider);

    state[provider[0]] = provider[1].props.value;
  });

  return <State.Provider value={state}>{children}</State.Provider>;
};
