import React, { Component } from 'react';
import { render } from '@testing-library/react';

import { withProviders } from '../src';

import { makeWrapper } from './utils';

const renderResult = (props: any) => (
  <p data-testid="result">{JSON.stringify(props)}</p>
);

const result = '{"show":false,"timeout":300}';

describe('withProviders usage with functional component', () => {
  const FunctionalComponent = (props: any) => {
    return renderResult(props);
  };

  const FunctionalComponentHOC = withProviders('modal')(FunctionalComponent);

  it('should render context state', () => {
    const { getByTestId } = render(makeWrapper()(FunctionalComponentHOC));

    expect(getByTestId('result').innerHTML).toBe(result);
  });
});

describe('withProviders usage with class component', () => {
  class ClassComponent extends Component<any> {
    render() {
      return renderResult(this.props);
    }
  }

  const ClassComponentHOC = withProviders('modal')(ClassComponent);

  it('should render context state', () => {
    const { getByTestId } = render(makeWrapper()(ClassComponentHOC));

    expect(getByTestId('result').innerHTML).toBe(result);
  });
});
