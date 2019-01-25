import React, { Component, Fragment }  from 'react'
import apiUrl from '../../apiConfig'
import { withRouter, Redirect, Link } from 'react-router-dom'
import './GasLogs.scss'
import GasLogForm from './GasLogForm.js'
import messages from '../messages.js'

class GasLogCreate extends Component {
  initialGasLog = () => {
    return {
      date:'',
      odometer:'',
      volume:'',
      fuel:'',
      brand:'',
      price:'',
      total:''
    }
  }
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      user: props.user,
      gas_log: this.initialGasLog()
    }

  }

  // POST to create a new Gas Log
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

    const { flash } = this.props

    fetch(`${apiUrl}/gas_logs`, options)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ gas_log: data.gas_log, id: data.gas_log.id }))
      .then(() => flash(messages.createLogSuccess, 'flash-success'))
      .catch(() => {
        flash(messages.createLogFailure, 'flash-error')
        this.setState({ gas_log: this.initialGasLog() })
      })
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
      return <Redirect to='/gas_logs'/>
    }
    const { date, odometer, volume, fuel, brand, price, total } = this.state.gas_log

    // Using GasLogForm to create a new Gas Log
    return (
      <Fragment>
        <h3 className="app-title">New Gas Log</h3>
        <GasLogForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          gas_log={this.state.gas_log}
        />
      </Fragment>
    )
  }
}

export default withRouter(GasLogCreate)
