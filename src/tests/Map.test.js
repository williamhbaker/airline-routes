import React from 'react';
import { shallow } from 'enzyme';

import Map from '../components/Map.js';

import { routes } from '../data.js';
const paths = routes.slice(0, 10);

describe('<Map>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Map
        routes={paths}
      />
    );
  });

  test('component renders', () => {
    expect(
      wrapper.find('svg').length
    ).toEqual(1);
  });

  test('map shows the right number of paths', () => {
    expect(
      wrapper.find('path').length
    ).toEqual(paths.length);
  });
});