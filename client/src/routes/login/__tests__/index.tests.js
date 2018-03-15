import React from 'react';
import { shallow } from 'enzyme';

import Login from '../index.bundle.js'

describe('<Login />', () => {
  it('renders the correctly with no error', () => {
    const login = shallow(<Login auth={{ isAuthenticated: false, invalid: false }} />);
    expect(login.find('div').length).toEqual(1);
    expect(login.find('h1').length).toEqual(1);
    expect(login.find('input').length).toEqual(2);
    expect(login.find('button').length).toEqual(1);
    expect(login.find('span').length).toEqual(0);
  });

  it('renders the correctly with error', () => {
    const login = shallow(<Login auth={{ isAuthenticated: false, invalid: true }} />);
    expect(login.find('div').length).toEqual(1);
    expect(login.find('h1').length).toEqual(1);
    expect(login.find('input').length).toEqual(2);
    expect(login.find('button').length).toEqual(1);
    expect(login.find('span').length).toEqual(1);
  });

});