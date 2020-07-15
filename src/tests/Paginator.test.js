import React from 'react';
import { shallow } from 'enzyme';

import Paginator from '../components/Paginator.js';

describe('<Paginator>', () => {
  let wrapper;
  const onPageClick = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Paginator
        currentPage={1}
        maxPages={10}
        onPageClick={onPageClick}
      />
    );
  });

  afterEach(() => {
    [onPageClick].forEach((fn) => fn.mockClear());
  });

  test('component renders', () => {
    expect(
      wrapper.find('nav').length
    ).toEqual(1);
  });

  test('previous button is hidden when currently on page 1', () => {
    expect(
      wrapper.find('button').first().props().className
    ).toMatch(/is-hidden/);
  });

  describe('click on the next button', () => {
    beforeEach(() => {
      const button = wrapper.find('button').at(1)
      button.simulate('click', {
        target: { value: 'testing' },
      });
    });

    test('onClick handler is invoked', () => {
      expect(
        onPageClick.mock.calls.length
      ).toEqual(1);
    });
  });
});