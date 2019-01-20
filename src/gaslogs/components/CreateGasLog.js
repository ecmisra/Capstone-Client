import React, { Component }  from 'react'
import apiUrl from '../../apiConfig.js'
import { withRouter } from 'react-router-dom'
import './GasLogs.scss'

class GasLogCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      gas_log: {
        date: '',
        odometer: '',
        volume: '',
        fuel: '',
        brand: '',
        price: '',
        total: ''
      }
    }

  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${user.user.token}`
      },
      body: JSON.stringify({
        movie: this.state.movie
      })
    }

    const { flash, history, setUser } = this.props

    fetch(`${apiUrl}/create_log`, options)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ id: data.gas_log.id }))
      .catch(console.error)
  }

  handleChange = (event) => {
    const createGasLog = {
      ...this.state.example, [event.target.name] : event.target.value
    }
    this.setState({ example: createGasLog })
  }

  createGasLog = event => {
    event.preventDefault()

    const { email, password } = this.state
    const { flash, history, setUser } = this.props

    createGasLog(this.state)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.signInSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.signInFailure, 'flash-error'))
  }

  render () {
    const { date, odometer, volume, fuel, brand, price, total } = this.state

    return (
      <form className='gas-log-form' onSubmit={this.createGasLog}>
        <h3>New Gas Log</h3>
        <label htmlFor="date">Date</label>
        <input
          required
          type="date"
          name="date"
          value={date}
          // placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="odometer">Odometer</label>
        <input
          required
          name="odometer"
          value={odometer}
          type="odometer"
          placeholder="Odometer Reading"
          onChange={this.handleChange}
        />
        <label htmlFor="volume">Volume</label>
        <input
          required
          name="volume"
          value={volume}
          type="volume"
          placeholder="Amount of Gas"
          onChange={this.handleChange}
        />
        <label htmlFor="fuel">Fuel Type</label>
        <input
          required
          name="fuel"
          value={fuel}
          type="fuel"
          placeholder="Type of Fuel"
          onChange={this.handleChange}
        />
        <label htmlFor="brand">Brand</label>
        <input
          required
          name="brand"
          value={brand}
          type="brand"
          placeholder="Brand of Gas"
          onChange={this.handleChange}
        />
        <label htmlFor="price">Price</label>
        <input
          required
          name="price"
          value={price}
          type="price"
          placeholder="$ per gallon"
          onChange={this.handleChange}
        />
        <label htmlFor="total">Total $</label>
        <input
          required
          name="total"
          value={total}
          type="total"
          placeholder="Total spent"
          onChange={this.handleChange}
        />
        <button type="submit">Create Log</button>
      </form>
    )
  }
}

export default withRouter(GasLogCreate)
