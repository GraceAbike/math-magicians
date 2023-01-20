// import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import Navbar from '../navbar';

it('renders correctly', () => {
  const tree = renderer

    .create(<BrowserRouter><Navbar /></BrowserRouter>)

    .toJSON();

  expect(tree).toMatchSnapshot();
});
