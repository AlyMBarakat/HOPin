import React from 'react';
import renderer from 'react-test-renderer';
import DateTimePicker from './CustomDataTimePicker';

test('renders date and time pickers correctly', () => {
  const tree = renderer
    .create(
      <>
        <DateTimePicker name="Date" type="date" />
        <DateTimePicker name="Time" type="time" />
      </>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
