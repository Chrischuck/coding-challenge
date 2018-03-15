import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions'

const Fragment = React.Fragment

const toppingData = [
  { 
    name: 'Cheese',
    value: 'CHEESE',
    price: 1.25
  },
  {
    name: 'Mushrooms',
    value: 'MUSHRROMS',
    price: 1.25
  },
  {
    name: 'Pepperoni',
    value: 'PEPPERONI',
    price: 1.00
  },
  {
    name: 'Bell Peppers',
    value: 'BELL_PEPPERS',
    price: 2.00
  }
]

const sizes = [
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

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: '50%',
    flexDirection: 'column',
  },
  options: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
}

const mapStateToProps = (state) => ({ home: state.home })
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 'MEDIUM', // take from props
      toppings: [],
    }
  }

  changeSize = event => {
    const { size, total } = this.state
    this.setState({ size: event.target.value })
  }

  changeTopping = event => {
    const { toppings } = this.state
    const topping = event.target.value

    if (toppings.includes(topping)) {
      // prefer not to mutate original array
      const newToppings = [...toppings]
      const index = newToppings.indexOf(topping)

      newToppings.splice(index, 1)
      this.setState({ toppings: newToppings })
    } else {
      this.setState({ toppings: [...toppings, topping ] })
    }
  }

  sendOrder = () => {
    const { size, toppings } = this.state
    this.props.sendOrder({ size, toppings })
  }

  calculateTotal = () => {
    const { size, toppings } = this.state
    let total = 0;

    const filteredSizes = sizes.filter(s => s.value === size)
    const filteredToppigns = toppingData.filter(t => toppings.includes(t.value))

    total += filteredSizes[0].price
    filteredToppigns.forEach(t => total += t.price)

    return total
  }

  render() {
    const { size, toppings } = this.state

    if (this.props.home.orderComplete) {
      return (
        <div style={style.container}>
          <h1>
            Your Order is Now Processing!
          </h1>
          <button onClick={this.props.reorder}>Click to Order Again!</button>
        </div>
      )
    }

    return (
      <div style={style.container}>
        <h1>
          Order a Pizza
        </h1>

        <div style={style.options}>
          <h3>Select Size</h3>
          <select value={this.state.size} onChange={this.changeSize} >

            {
              sizes.map(size => <option value={size.value}>{`${size.name} $${size.price}`}</option>)
            }
          </select>
        </div>

        <div style={style.options}>
          <h3>Select Toppings</h3>

          <form >
            {
              toppingData.map(topping => (
                <Fragment>
                  <input type="checkbox" value={topping.value} onChange={this.changeTopping} />
                  <label>{topping.name}</label><span style={{color: '#565656'}}>{`  +$${topping.price}`}</span><br/>
                </Fragment>
              ))
            }
          </form>

        </div>

        <div style={style.options}>
          <h3 style={{marginBottom: '5px'}}>Total Price</h3>
          <h4 style={{marginTop: '0px'}}>{ '$' + this.calculateTotal() }</h4>
        </div>


        <div style={style.options}>
          <button onClick={this.sendOrder}>Order</button>
        </div>
      </div>
    )
  }
}
export default Home