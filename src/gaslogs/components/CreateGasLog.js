import React, { Component, Fragment }  from 'react'
import apiUrl from '../../apiConfig'
import { withRouter, Redirect } from 'react-router-dom'
import './GasLogs.scss'

class GasLogCreate extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      id: null,
      user: props.user,
      gas_log: []
    }

  }

  handleSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${this.state.user.token}`
      },
      body: JSON.stringify({
        gas_log: this.state.gas_log
      })
    }

    fetch(`${apiUrl}/gas_logs`, options)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ gas_log: data.gas_log, id: data.gas_log.id }))
      .catch(console.error)
  }

  handleChange = (event) => {
    const createGasLog = {
      ...this.state.gas_log, [event.target.name] : event.target.value
    }
    this.setState({ gas_log: createGasLog })
  }

  // createGasLog = event => {
  //   event.preventDefault()
  //
  //   const { email, password } = this.state
  //   const { flash, history, setUser } = this.props
  //
  //   createGasLog(this.state)
  //     .then(res => res.ok ? res : new Error())
  //     .then(res => res.json())
  //     .then(res => setUser(res.user))
  //     .then(() => flash(messages.signInSuccess, 'flash-success'))
  //     .then(() => history.push('/'))
  //     .catch(() => flash(messages.signInFailure, 'flash-error'))
  // }

  render () {
    const { id } = this.state
    if (id) {
      return <Redirect to='/gas_logs' />
    }
    const { date, odometer, volume, fuel, brand, price, total } = this.state.gas_log

    return (
      <Fragment>
        <form className='gas-log-form' onSubmit={this.handleSubmit}>
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
            placeholder="Odometer Reading"
            onChange={this.handleChange}
          />
          <label htmlFor="volume">Volume</label>
          <input
            required
            name="volume"
            value={volume}
            placeholder="Amount of Gas"
            onChange={this.handleChange}
          />
          <label htmlFor="fuel">Fuel Type</label>
          <input
            required
            name="fuel"
            value={fuel}
            placeholder="Type of Fuel"
            onChange={this.handleChange}
          />
          <label htmlFor="brand">Brand</label>
          <input
            required
            name="brand"
            value={brand}
            placeholder="Brand of Gas"
            onChange={this.handleChange}
          />
          <label htmlFor="price">Price</label>
          <input
            required
            name="price"
            value={price}
            placeholder="$ per gallon"
            onChange={this.handleChange}
          />
          <label htmlFor="total">Total $</label>
          <input
            required
            name="total"
            value={total}
            placeholder="Total spent"
            onChange={this.handleChange}
          />
          <button type="submit">Create Log</button>
        </form>
      </Fragment>
    )
  }
}

export default withRouter(GasLogCreate)
