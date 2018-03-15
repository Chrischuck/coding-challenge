import React from 'react';
import { shallow } from 'enzyme';

import Home from '../index.bundle.js'

test('Home has rendered correctly on initialization w/ no size and toppings', () => {
  const home = shallow(
    <Home
      getOptions={() => {}}
      reorder={() => {}}
      home={{ orderComplete: false, sizes:[], toppings: [] }}
    />
  )
  
  expect(home.find('option')).toHaveLength(0)
  expect(home.find('input')).toHaveLength(0)
  expect(home.instance().calculateTotal()).toBe(0)
})

test('Home has rendered correctly on initialization w/ 3 sizes and 3 toppings', () => {
  const home = shallow(
    <Home
      getOptions={() => {}}
      reorder={() => {}}
      home={{
        orderComplete: false,
        toppings:[
            { 
              name: 'Cheese',
              value: 'CHEESE',
              price: 1.25
            },
            {
              name: 'Mushrooms',
              value: 'MUSHROOMS',
              price: 1.25
            },
            {
              name: 'Pepperoni',
              value: 'PEPPERONI',
              price: 1.00
            }
        ],
        sizes: [
          { 
            name: 'Small',
            value: 'SMALL',
            price: 10.00
          },
          {
            name: 'Medium',
            value: 'MEDIUM',
            price: 12.00
          },
          {
            name: 'Large',
            value: 'LARGE',
            price: 15.00
          }
        ]
      }}
    />
  )

  expect(home.find('option')).toHaveLength(3)
  expect(home.find('input')).toHaveLength(3)
  expect(home.instance().calculateTotal()).toBe(0)
})

test('Home calculates price of sizes correctly', () => {
  const home = shallow(
    <Home
      getOptions={() => {}}
      reorder={() => {}}
      home={{
        orderComplete: false,
        toppings:[
            { 
              name: 'Cheese',
              value: 'CHEESE',
              price: 1.25
            },
            {
              name: 'Mushrooms',
              value: 'MUSHROOMS',
              price: 1.25
            },
            {
              name: 'Pepperoni',
              value: 'PEPPERONI',
              price: 1.00
            }
        ],
        sizes: [
          { 
            name: 'Small',
            value: 'SMALL',
            price: 10.00
          },
          {
            name: 'Medium',
            value: 'MEDIUM',
            price: 12.00
          },
          {
            name: 'Large',
            value: 'LARGE',
            price: 15.00
          }
        ]
      }}
    />
  )
  home.setState({ size: 'SMALL' })
  expect(home.instance().calculateTotal()).toBe(10)

  home.setState({ size: 'MEDIUM' })
  expect(home.instance().calculateTotal()).toBe(12)

  home.setState({ size: 'LARGE' })
  expect(home.instance().calculateTotal()).toBe(15)

})

test('Home calculates price of sizes w/ single topping correctly', () => {
  const home = shallow(
    <Home
      getOptions={() => {}}
      reorder={() => {}}
      home={{
        orderComplete: false,
        toppings:[
            { 
              name: 'Cheese',
              value: 'CHEESE',
              price: 1.25
            },
            {
              name: 'Mushrooms',
              value: 'MUSHROOMS',
              price: 1.25
            },
            {
              name: 'Pepperoni',
              value: 'PEPPERONI',
              price: 1.00
            }
        ],
        sizes: [
          { 
            name: 'Small',
            value: 'SMALL',
            price: 10.00
          },
          {
            name: 'Medium',
            value: 'MEDIUM',
            price: 12.00
          },
          {
            name: 'Large',
            value: 'LARGE',
            price: 15.00
          }
        ]
      }}
    />
  )

  home.setState({ size: 'SMALL', toppings: ['CHEESE'] })
  expect(home.instance().calculateTotal()).toBe(11.25)

  home.setState({ size: 'SMALL', toppings: ['MUSHROOMS'] })
  expect(home.instance().calculateTotal()).toBe(11.25)

  home.setState({ size: 'SMALL', toppings: ['PEPPERONI'] })
  expect(home.instance().calculateTotal()).toBe(11)

  home.setState({ size: 'MEDIUM', toppings: ['CHEESE'] })
  expect(home.instance().calculateTotal()).toBe(13.25)

  home.setState({ size: 'MEDIUM', toppings: ['MUSHROOMS'] })
  expect(home.instance().calculateTotal()).toBe(13.25)

  home.setState({ size: 'MEDIUM', toppings: ['PEPPERONI'] })
  expect(home.instance().calculateTotal()).toBe(13)

  home.setState({ size: 'LARGE', toppings: ['CHEESE'] })
  expect(home.instance().calculateTotal()).toBe(16.25)

  home.setState({ size: 'LARGE', toppings: ['MUSHROOMS'] })
  expect(home.instance().calculateTotal()).toBe(16.25)

  home.setState({ size: 'LARGE', toppings: ['PEPPERONI'] })
  expect(home.instance().calculateTotal()).toBe(16)

})

test('Home calculates price of sizes w/ two toppings correctly', () => {
  const home = shallow(
    <Home
      getOptions={() => {}}
      reorder={() => {}}
      home={{
        orderComplete: false,
        toppings:[
            { 
              name: 'Cheese',
              value: 'CHEESE',
              price: 1.25
            },
            {
              name: 'Mushrooms',
              value: 'MUSHROOMS',
              price: 1.25
            },
            {
              name: 'Pepperoni',
              value: 'PEPPERONI',
              price: 1.00
            }
        ],
        sizes: [
          { 
            name: 'Small',
            value: 'SMALL',
            price: 10.00
          },
          {
            name: 'Medium',
            value: 'MEDIUM',
            price: 12.00
          },
          {
            name: 'Large',
            value: 'LARGE',
            price: 15.00
          }
        ]
      }}
    />
  )

  home.setState({ size: 'SMALL', toppings: ['CHEESE', 'MUSHROOMS'] })
  expect(home.instance().calculateTotal()).toBe(12.50)

  home.setState({ size: 'SMALL', toppings: ['MUSHROOMS', 'PEPPERONI'] })
  expect(home.instance().calculateTotal()).toBe(12.25)

  home.setState({ size: 'SMALL', toppings: ['PEPPERONI', 'CHEESE'] })
  expect(home.instance().calculateTotal()).toBe(12.25)

  home.setState({ size: 'MEDIUM', toppings: ['CHEESE', 'MUSHROOMS'] })
  expect(home.instance().calculateTotal()).toBe(14.50)

  home.setState({ size: 'MEDIUM', toppings: ['MUSHROOMS', 'PEPPERONI'] })
  expect(home.instance().calculateTotal()).toBe(14.25)

  home.setState({ size: 'MEDIUM', toppings: ['PEPPERONI', 'CHEESE'] })
  expect(home.instance().calculateTotal()).toBe(14.25)

  home.setState({ size: 'LARGE', toppings: ['CHEESE', 'MUSHROOMS'] })
  expect(home.instance().calculateTotal()).toBe(17.50)

  home.setState({ size: 'LARGE', toppings: ['MUSHROOMS', 'PEPPERONI'] })
  expect(home.instance().calculateTotal()).toBe(17.25)

  home.setState({ size: 'LARGE', toppings: ['PEPPERONI', 'CHEESE'] })
  expect(home.instance().calculateTotal()).toBe(17.25)

})

test('Home calculates price of sizes w/ 3 toppings correctly', () => {
  const home = shallow(
    <Home
      getOptions={() => {}}
      reorder={() => {}}
      home={{
        orderComplete: false,
        toppings:[
            { 
              name: 'Cheese',
              value: 'CHEESE',
              price: 1.25
            },
            {
              name: 'Mushrooms',
              value: 'MUSHROOMS',
              price: 1.25
            },
            {
              name: 'Pepperoni',
              value: 'PEPPERONI',
              price: 1.00
            }
        ],
        sizes: [
          { 
            name: 'Small',
            value: 'SMALL',
            price: 10.00
          },
          {
            name: 'Medium',
            value: 'MEDIUM',
            price: 12.00
          },
          {
            name: 'Large',
            value: 'LARGE',
            price: 15.00
          }
        ]
      }}
    />
  )

  home.setState({ size: 'SMALL', toppings: ['CHEESE', 'MUSHROOMS', 'PEPPERONI'] })
  expect(home.instance().calculateTotal()).toBe(13.50)


  home.setState({ size: 'MEDIUM', toppings: ['CHEESE', 'MUSHROOMS', 'PEPPERONI'] })
  expect(home.instance().calculateTotal()).toBe(15.50)

  home.setState({ size: 'LARGE', toppings: ['CHEESE', 'MUSHROOMS', 'PEPPERONI'] })
  expect(home.instance().calculateTotal()).toBe(18.50)

})