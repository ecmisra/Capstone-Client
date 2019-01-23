import React, { Component, Fragment }  from 'react'
import apiUrl from '../../apiConfig'
import { withRouter, Redirect } from 'react-router-dom'
import './GasLogs.scss'
import GasLogForm from './GasLogForm.js'

class GasLogEdit extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      updated: false,
      id: '',
      user: props.user,
      gas_log: []
    }

  }

  handleSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${this.state.user.token}`
      },
      body: JSON.stringify({
        gas_log: this.state.gas_log
      })
    }

    fetch(`${apiUrl}/gas_logs/${id}`, options)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ gas_log: data.gas_log, id: data.gas_log.id }))
      .catch(console.error)
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedGasLog = Object.assign(this.state, updatedField)
    this.setState({ gas_log: editedGasLog })
  }

  render () {
    const { id } = this.state
    if (this.state.updated) {
      return <Redirect to={`/gas_logs/${id}`} />
    }
    const { date, odometer, volume, fuel, brand, price, total } = this.state.gas_log

    return (
      <Fragment>
        <h2>Edit Log</h2>
        <GasLogForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          gas_log={this.state.gas_log}
        />
      </Fragment>
    )
  }
}

export default withRouter(GasLogEdit)
