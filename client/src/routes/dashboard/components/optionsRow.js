import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    padding: '5px'
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  }
}

const mapStateToProps = (state) => ({ home: state.home })
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Row extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.name,
      price: this.props.price,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ name: nextProps.name, price: nextProps.price })
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  deleteOption = () => {
    this.props.deleteOption({ value: this.props.value, table: this.props.table })
  }

  render() {
    const { name, price, value, onClick, buttonText1, buttonText2 } = this.props
    return (
      <div style={styles.container}>
        <div style={{...styles.row, flex: 2}}>
          <input
            style={{width: '80%'}}
            name='name'
            placeholder='Name'
            value={this.state.name}
            onChange={this.onChange}
          />
        </div>
        <div style={{...styles.row, flex: 1}}>
          $
          <input
            style={{width: '80%'}}
            name='price'
            placeholder='Price'
            value={this.state.price}
            type='number'
            onChange={this.onChange}
          />
        </div>
        <button>{buttonText1}</button>
        { buttonText2 && <button onClick={this.deleteOption}>{buttonText2}</button> }
      </div>
    )
  }

}

export default Row