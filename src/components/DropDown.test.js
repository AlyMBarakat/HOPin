import React from 'react';
import renderer from 'react-test-renderer';
import DropDown from './DropDown';

const testList = ['temp1', 'temp2', 'temp3', 'temp4', 'temp5', 'temp6'];

test('renders dropdown picker correctly', () => {
  const tree = renderer
    .create(<DropDown list={testList} name="Dropdown list" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
