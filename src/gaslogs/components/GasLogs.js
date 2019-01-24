import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import messages from '../messages.js'

class GasLogs extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: props.user,
      gas_log: [],
      notFound: false,
      deleted: false
    }
  }

  // GET all Gas Logs

  componentDidMount () {
    const id = this.props.match.params.id



    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${this.state.user.token}`
      }

    }

    const { flash } = this.props

    fetch(`${apiUrl}/gas_logs`, options)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ gas_log: data.gas_logs }))
      .catch(() => this.setState({ notFound: true }))
      .catch(() => flash(messages.getLogFailure, 'flash-error'))
  }

  // DELETE one Gas Log

  destroy = () => {
    const options = {
      method: 'DELETE'
    }

    const id = this.props.match.params.id

    fetch(`${apiUrl}/gas_logs`, options)
      .then(res => res.ok ? res : new Error())
      .then(data => this.setState({ deleted: true }))
      .catch(() => this.setState({ notFound: true }))
  }

  // Display for all Gas Logs

  render () {
    const gas_logs = this.state.gas_log.map(gas_log => {
      return (
        <div key={gas_log.id}>
          <ul  className="logs">
            {/* Link to individual Gas Log page v */}
            <Link to={`/gas_logs/${gas_log.id}`}><h5 className="log-title">⛽️ Log on {gas_log.date}</h5></Link>
            <li><strong>Odometer:</strong> {gas_log.odometer} miles</li>
            <li><strong>Volume:</strong> {gas_log.volume} gallons</li>
            <li><strong>Fuel Type:</strong> {gas_log.fuel}</li>
            <li><strong>Brand of Gas:</strong> {gas_log.brand}</li>
            <li><strong>Price per gal:</strong> ${gas_log.price}</li>
            <li><strong>Total spent:</strong> ${gas_log.total}</li>
          </ul>
        </div>
      )
    })

    return (
      <Fragment>
        <h1><strong>Gas Logs</strong></h1>
        {gas_logs}
      </Fragment>
    )
  }
}


export default withRouter(GasLogs)
