import React from 'react';

interface Props {
  readonly children: React.ReactNode;
}

export const State = React.createContext<any>({});

export const ProvideProviders = ({ children }: Props) => {
  return <State.Provider value={{}}>{children}</State.Provider>;
};
