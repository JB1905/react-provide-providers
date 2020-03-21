import React, { Component } from 'react';
import { render } from '@testing-library/react';

import { ProvideProviders, withProviders } from '../src';

const Theme = React.createContext<{ primary?: string }>({ primary: '' });
const Auth = React.createContext<{ isAuthenticated?: boolean }>({
  isAuthenticated: undefined
});

const providers = {
  theme: <Theme.Provider value={{ primary: 'dark' }} />,
  auth: <Auth.Provider value={{ isAuthenticated: true }} />,
  modal: { show: false, timeout: 300 }
};

// React.FC<{
// modal: { show: boolean; timeout: number };
// }>
// React.FC<{ show: boolean; timeout: number }>

describe('withProviders usage with functional component', () => {
  const FunctionalComponent = (props: any) => {
    return <p>{JSON.stringify(props)}</p>;
  };

  const FunctionalComponentHOC = withProviders('modal')(FunctionalComponent);

  it('should render ', () => {
    const { container } = render(
      <ProvideProviders providers={providers}>
        <FunctionalComponentHOC />
      </ProvideProviders>
    );

    expect(container.firstChild!.textContent!).toBe(
      '{"show":false,"timeout":300}'
    );
  });
});

//<{
//   modal: { show: boolean; timeout: number };
// }>

describe('withProviders usage with class component', () => {
  class ClassComponent extends Component<any> {
    render() {
      // const { modal } = this.props;

      return <>{JSON.stringify(this.props)}</>;
    }
  }

  const ClassComponentHOC = withProviders('modal')(ClassComponent);

  it('should render ', () => {
    const { container } = render(
      <ProvideProviders providers={providers}>
        <ClassComponentHOC />
      </ProvideProviders>
    );

    expect(container.firstChild!.textContent!).toBe(
      '{"show":false,"timeout":300}'
    );
  });
});
