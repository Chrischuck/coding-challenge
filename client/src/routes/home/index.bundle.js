import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

import * as actions from './actions'

const Fragment = React.Fragment

const style = {
  container: {
    marginTop: '10%',
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
      size: null, // take from props
      toppings: [],
    }
  }

  componentWillMount() {
    this.props.getOptions()
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.size === null && nextProps.home.sizes[0]) {
      this.setState({ size: nextProps.home.sizes[0].value })
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

    if (!size) {
      return 0
    }

    let total = 0;

    const filteredSizes = this.props.home.sizes.filter(s => s.value === size)
    const filteredToppigns = this.props.home.toppings.filter(t => toppings.includes(t.value))

    total += filteredSizes[0].price
    filteredToppigns.forEach(t => total += t.price)

    return total
  }

  render() {
    const { size, toppings } = this.state

    return this.props.home.orderComplete ?
      (
        <div style={style.container}>
          <h1>
            Your Order is Now Processing!
          </h1>
          <button onClick={this.props.reorder}>Click to Order Again!</button>
        </div>  
      )
      :
      (
      <div style={style.container}>
        <h1 style={{marginBottom: '5px'}}>
          Order a Pizza
        </h1>
        <Link to='/login' style={{marginBottom: '25px'}}>Or login as Admin </Link>
        <div style={style.options}>
          <h3>Select Size</h3>
          <select value={this.state.size || ''} onChange={this.changeSize} >

            {
              this.props.home.sizes.map(size => <option value={size.value}>{`${size.name} $${size.price}`}</option>)
            }
          </select>
        </div>

        <div style={style.options}>
          <h3>Select Toppings</h3>

          <form >
            {
              this.props.home.toppings.map(topping => (
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