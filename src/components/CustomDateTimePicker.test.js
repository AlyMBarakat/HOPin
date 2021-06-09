import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import DateTimePicker from './CustomDataTimePicker';

const DatePicker = ({ name, type }) => {
  const [date, setDate] = useState(new Date(1598051730000));

  return <DateTimePicker
    name={name}
    type={type}
    date={date}
    setDate={setDate}
  />
}

test('renders date and time pickers correctly', () => {
  const tree = renderer
    .create(
      <>
        <DatePicker name="Date" type="date" />
        <DatePicker name="Time" type="time" />
      </>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
