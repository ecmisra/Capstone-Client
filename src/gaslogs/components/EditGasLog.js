import React, { Component, Fragment }  from 'react'
import apiUrl from '../../apiConfig'
import { withRouter, Redirect } from 'react-router-dom'
import './GasLogs.scss'
import GasLogForm from './GasLogForm.js'
import messages from '../messages.js'

class GasLogEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updated: false,
      id: '',
      user: props.user,
      gas_log: {
        date:'',
        odometer:'',
        volume:'',
        fuel:'',
        brand:'',
        price:'',
        total:''
      }
    }

  }


  // GET a Gas Log from API so that it can then be editing
  componentDidMount () {
    const id = this.props.match.params.id

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${this.state.user.token}`
      }

    }

    fetch(`${apiUrl}/gas_logs/${id}`, options)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ gas_log: data.gas_log, id: data.gas_log.id }))
      .catch(() => flash(messages.getLogFailure, 'flash-error'))
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedGasLog = Object.assign(this.state, updatedField)
    this.setState({ gas_log: editedGasLog })
  }


  // PATCH for editing a Gas Log
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

    const id = this.props.match.params.id
    const { flash } = this.props


    fetch(`${apiUrl}/gas_logs/${id}`, options)
      .then(res => res.ok ? res : new Error())
      .then(data => this.setState({ updated: true }))
      .then(() => flash(messages.updateLogSuccess, 'flash-success'))
      .catch(() => flash(messages.updateLogFailure, 'flash-error'))

  }



  render () {
    const { id } = this.state
    if (this.state.updated) {
      return <Redirect to={`/gas_logs/${id}`} />
    }
    const { date, odometer, volume, fuel, brand, price, total } = this.state.gas_log

    // Using GasLogForm to edit existing Gas Log
    return (
      <Fragment>
        <h2 className="app-title">Edit Log</h2>
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
