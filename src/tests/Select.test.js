import React from 'react';
import { shallow } from 'enzyme';

import Select from '../components/Select.js';

import { airlines } from '../data.js';

const options = airlines.map((airline, idx) => {
  const disabled = idx < 2 ? true : false;
  return Object.assign(airline, { disabled });
});

describe('<Select>', () => {
  let wrapper;
  const onFilterSelect = jest.fn();
  const valueKey = "id";

  beforeEach(() => {
    wrapper = shallow(
      <Select
        allTitle="All Airlines"
        options={options}
        valueKey={valueKey}
        titleKey="name"
        value={""}
        onSelect={(event) => onFilterSelect('airlineFilter', event.target.value)}
      />
    );
  });

  afterEach(() => {
    [onFilterSelect].forEach((fn) => fn.mockClear());
  });

  test('component renders', () => {
    expect(
      wrapper.find('div').length
    ).toEqual(1);
  });

  test('some options are disabled', () => {
    expect(
      wrapper.find('option').at(1).props().disabled
    ).toEqual(true);
  })

  test('all provided options are included in the selector', () => {
    expect(
      wrapper.find('option').length
    ).toEqual(airlines.length + 1);
  });

  describe('selection is made', () => {
    beforeEach(() => {
      const selector = wrapper.find('select').first();

      selector.simulate('change', {
        target: { value: options[0][valueKey] }
      });
    });

    test('onChange callback is fired with the right argument', () => {
      expect(
        onFilterSelect.mock.calls[0][1]
      ).toEqual(options[0][valueKey]);
    });
  });
});