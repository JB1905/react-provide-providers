import React, { Component } from 'react';
import { render } from '@testing-library/react';

import { withProviders } from '../src';

import { composeTree } from './utils';

describe('withProviders usage with functional component', () => {
  const FunctionalComponent = (props: any) => {
    return <p>{JSON.stringify(props)}</p>;
  };

  const FunctionalComponentHOC = withProviders('modal')(FunctionalComponent);

  it('should render context state', () => {
    const { container } = render(composeTree(FunctionalComponentHOC));

    expect(container.firstChild!.textContent!).toBe(
      '{"show":false,"timeout":300}'
    );
  });
});

describe('withProviders usage with class component', () => {
  class ClassComponent extends Component<any> {
    render() {
      return <>{JSON.stringify(this.props)}</>;
    }
  }

  const ClassComponentHOC = withProviders('modal')(ClassComponent);

  it('should render context state', () => {
    const { container } = render(composeTree(ClassComponentHOC));

    expect(container.firstChild!.textContent!).toBe(
      '{"show":false,"timeout":300}'
    );
  });
});
