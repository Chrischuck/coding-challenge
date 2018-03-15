import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Row from './components/optionsRow'

import * as actions from './actions'

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: '50%',
    flexDirection: 'column',
  }
}

const mapStateToProps = (state) => ({ dashboard: state.dashboard })
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getOptions()
  }

  render() {
    const { sizes, toppings } = this.props.dashboard

    return (
      <div style={style.container}>
        <h1 style={{marginBottom: '10px'}}>
          Dashboard
        </h1>
          <h3>Sizes</h3>
            <div style={{width:'50%'}}>
              {
                sizes.map(s => <Row {...s} buttonText1={'update'} buttonText2={'delete'} table='sizes'/>)
              }
            </div>
            <div style={{width:'50%', marginTop: '10px'}}>
              <Row 
                name=''
                value=''
                price=''
                table='sizes'
                buttonText1={'create'} 
              />
            </div>
          <h3>Options</h3>
            <div style={{width:'50%'}}>
              {
                toppings.map(t => <Row {...t} buttonText1={'update'} buttonText2={'delete'} table='toppings'/>)
              }
            </div>
            <div style={{width:'50%', marginTop: '10px'}}>
              <Row 
                name=''
                value=''
                price=''
                table='toppings'
                buttonText1={'create'} 
              />
            </div>
      </div>
    )
  }
}

export default Dashboard