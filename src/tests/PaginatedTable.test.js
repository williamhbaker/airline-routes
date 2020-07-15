import React from 'react';
import { shallow } from 'enzyme';

import PaginatedTable from '../components/PaginatedTable.js';

describe('<PaginatedTable>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PaginatedTable
        format={() => {}}
        columns={[]}
        rows={[]}
        currentPage={1}
        onPageClick={() => {}}
        maxRows={25}
      />
    );
  });

  test('component renders', () => {
    expect(
      wrapper.find('div').length
    ).toEqual(1);
  });
});