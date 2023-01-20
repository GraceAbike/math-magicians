// import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import Quote from '../quote';

it('renders correctly', () => {
  const tree = renderer

    .create(<Quote />)

    .toJSON();

  expect(tree).toMatchSnapshot();
});
