import React from 'react';
import renderer from 'react-test-renderer';
import RideCard from './RideCard';

test('renders RideCard correctly', () => {
  const tree = renderer
    .create(
      <RideCard
        name="Ahmed Khalid"
        car="Mitsubishi Lancer 2017"
        road="Desert Road"
        time="9:30 AM"
        seatsLeft="4"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
