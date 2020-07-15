import React from 'react';
import { shallow } from 'enzyme';

import Table from '../components/Table.js';

import { routes } from '../data.js';

const columns = [
  {name: 'Airline', property: 'airline'},
  {name: 'Source Airport', property: 'src'},
  {name: 'Destination Airport', property: 'dest'},
];

const rows = routes.slice(0, 25).map((route, idx) => Object.assign(route, { id: idx }));

describe('<Table>', () => {
  let wrapper;
  const format = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Table
        format={format}
        columns={columns}
        rows={rows}
      />
    );
  });

  afterEach(() => {
    [format].forEach((fn) => fn.mockClear());
  });

  test('component renders', () => {
    expect(
      wrapper.find('table').length
    ).toEqual(1);
  });

  test('table has the right amount of rows', () => {
    expect(
      wrapper.find('tbody tr').length
    ).toEqual(rows.length);
  });

  test('format function gets called for each column in each row', () => {
    expect(
      format.mock.calls.length
    ).toEqual(rows.length * columns.length);
  });
});