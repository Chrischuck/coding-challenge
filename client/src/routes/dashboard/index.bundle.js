import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

const mapStateToProps = (state) => ({ auth: state.auth })
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
   
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