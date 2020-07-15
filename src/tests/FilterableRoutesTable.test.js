import React from 'react';
import { shallow } from 'enzyme';

import FilterableRoutesTable from '../components/FilterableRoutesTable.js';

describe('<FilterableRoutesTable>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FilterableRoutesTable
        options={() => {}}
        airlineFilterValue={''}
        onFilterSelect={() => {}}
        airportFilterValue={''}
        onClearFilterClick={() => {}}
        rows={[]}
        currentPage={1}
        onPageClick={() => {}}
      />
    );
  });

  test('component renders', () => {
    expect(
      wrapper.find('section').length
    ).toEqual(1);
  });
});