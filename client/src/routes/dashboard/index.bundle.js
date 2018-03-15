import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as optionsActions from '../home/actions'
import * as dashboardOptions from './actions'

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

const mapStateToProps = (state) => ({ home: state.home })
const mapDispatchToProps = (dispatch) => bindActionCreators({ ...optionsActions, ...dashboardOptions }, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      sizes: [],
      toppings: [],
    }
  }

  componentWillMount() {
    this.props.getOptions()
  }

  componentWillReceiveProps(nextProps) {
    const { sizes, toppings } = nextProps.home
    if (this.state.sizes.length === 0 || this.state.toppings.length === 0) {
      this.setState({ sizes, toppings })
    }
  }

  render() {
    return (
      <div style={style.container}>
        <h1 style={{marginBottom: '10px'}}>
          Dashboard
        </h1>

      </div>
    )
  }
}

export default Dashboard