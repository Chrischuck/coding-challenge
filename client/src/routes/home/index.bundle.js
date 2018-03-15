import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions'

const Fragment = React.Fragment

const toppingData = [
  {
    value: 'CHEESE',
    price: 1.25
  },
  {
    value: 'MUSHRROMS',
    price: 1.25
  },
  {
    value: 'PEPPERONI',
    price: 1.00
  },
  {
    value: 'BELL_PEPPERS',
    price: 2.00
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
      size: 'MEDIUM',
      toppings: []
    }
  }

  changeSize = event => {
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
          <select value={size} onChange={this.changeSize} >
            <option value='SMALL'>Small</option>
            <option value='MEDIUM'>Medium</option>
            <option value='LARGE'>Large</option>
          </select>
        </div>

        <div style={style.options}>
          <h3>Select Toppings</h3>

          <form >
            {
              toppingData.map(topping => (
                <Fragment>
                  <input type="checkbox" value="CHEESE" onChange={this.changeTopping} />
                  <label>Cheese</label><br/>
                </Fragment>
              ))
            }
          </form>

        </div>

        <div style={style.options}>
          <h3 style={{marginBottom: '5px'}}>Total Price</h3>
          <h4 style={{marginTop: '0px'}}>$200</h4>
        </div>


        <div style={style.options}>
          <button onClick={this.props.sendOrder}>Order</button>
        </div>
      </div>
    )
  }
}
export default Home