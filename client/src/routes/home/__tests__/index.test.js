import React from 'react';
import { shallow } from 'enzyme';

import Home from '../index.bundle.js'

describe('<Home />', () => {
  it('renders the correctly ', () => {
    const renderedComponent = shallow(<Home />).dive();

  });
});
