import React from 'react';
import { shallow } from 'enzyme';

import Header from '../components/Header.js';

describe('<Header>', () => {
  let wrapper;
  const heading = 'test heading';

  beforeEach(() => {
    wrapper = shallow(
      <Header
        heading={heading}
      />
    );
  });

  test('component renders', () => {
    expect(
      wrapper.find('h1').length
    ).toEqual(1);
  });
});