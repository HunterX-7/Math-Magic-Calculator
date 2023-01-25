import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/home';

it('Home page renders correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
