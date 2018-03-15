import React from 'react';
import { shallow } from 'enzyme';
import Row from '../optionsRow';

test('Row to edit an option has correct state on initialization', () => {
  const row = shallow(<Row name='Large' value='LARGE' price={12} buttonText1='update' buttonText2='delete' />);
  
  const name = row.state().name
  const price = row.state().price

  expect(name).toEqual('Large')
  expect(price).toEqual(12)
})

test('Row to create an option has correct state on initialization', () => {
  const row = shallow(<Row buttonText1='create' />);
  
  const name = row.state().name
  const price = row.state().price

  expect(name).toBeUndefined()
  expect(price).toBeUndefined()
});

test('Row to edit an option has rendered correctly on initialization', () => {
  const row = shallow(<Row name='Large' value='LARGE' price={12} buttonText1='update' buttonText2='delete' />);
  
  expect(row.find('input')).toHaveLength(2)
  expect(row.find('button')).toHaveLength(2)
});

test('Row to create an option has rendered correctly on initialization', () => {
  const row = shallow(<Row buttonText1='create' />);
  
  expect(row.find('input')).toHaveLength(2)
  expect(row.find('button')).toHaveLength(1)
});