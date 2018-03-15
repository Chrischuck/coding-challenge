import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../index.bundle.js'

describe('<NotFound />', () => {
  it('renders the correctly ', () => {
    const notFound = shallow(<NotFound />);
    expect(notFound.find('div').length).toEqual(1);
    expect(notFound.find('h1').length).toEqual(1);
  });
});