import React from 'react';
import { shallow } from 'enzyme';

import FilterBar from '../components/FilterBar.js';

describe('<FilterBar>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FilterBar
        options={() => {}}
        airlineFilterValue={''}
        airportFilterValue={''}
        onFilterSelect={() => {}}
        onClearFilterClick={() => {}}
        airlines={[]}
        airports={[]}
      />
    );
  });

  test('component renders', () => {
    expect(
      wrapper.find('nav').length
    ).toEqual(1);
  });
});