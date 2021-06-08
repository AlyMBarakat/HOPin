import React from 'react';
import renderer from 'react-test-renderer';
import Road from './Road';

const temp = [
  {
    name: 'Aly',
    car: 'Mitsubishi Lancer 2007',
  },
  {
    name: 'Khalid Khalil',
    car: 'Fiat Tipo',
  },
  {
    name: 'Amira Barakat',
    car: 'Nissan Qashqai',
  },
];

const testList = ['temp1', 'temp2', 'temp3', 'temp4', 'temp5', 'temp6'];

test('renders date and time pickers correctly', () => {
  const tree = renderer
    .create(<Road source="Alexandria" destination="Cairo" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
