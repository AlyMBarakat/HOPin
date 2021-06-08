import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';

test('renders Counter correctly', () => {
  const tree = renderer.create(<Counter name="counter" />).toJSON();
  expect(tree).toMatchSnapshot();
});
