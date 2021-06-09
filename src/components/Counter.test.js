import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';

const Test = () => {
  const [count, setCount] = useState(0);
  return <Counter name="counter" count={count} setCount={setCount} />
}

test('renders Counter correctly', () => {
  const tree = renderer.create(<Test />).toJSON();
  expect(tree).toMatchSnapshot();
});
