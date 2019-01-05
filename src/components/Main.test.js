import React from 'react';
import Main from './Main';
import {mount} from 'enzyme';

it('shows a h3 title', () => {
  const wrapped = mount(<Main />);
  expect(wrapped.find('h3').length).toEqual(1);
});
