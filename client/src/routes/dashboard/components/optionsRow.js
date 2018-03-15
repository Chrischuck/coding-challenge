import React from 'react'

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
class Row extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.name,
      value: this.props.value,
      price: this.props.price
    }
  }

  onChange = event => {
    console.log('asdf')
    this.setState({ [event.target.name]: event.target.value })
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
        { buttonText2 && <button>{buttonText2}</button> }
      </div>
    )
  }

}

export default Row