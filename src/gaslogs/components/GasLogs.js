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

    const { gas_log, notFound, deleted } = this.state

    // Display message to user if they haven't created any gas logs yet
    if (this.state.gas_log.length == 0) {
      return (<h4>You don&#39;t have any gas logs!</h4>)
    }

    const gas_logs = this.state.gas_log.map(gas_log => {
      return (
        <tbody key={gas_log.id}>
          <tr  className="logs">
            {/* Link to individual Gas Log page v */}
            <td><Link to={`/gas_logs/${gas_log.id}`}><h5 className="log-title">⛽️ Log on {gas_log.date}</h5></Link></td>
            <td>{gas_log.odometer} miles</td>
            <td>{gas_log.volume} gallons</td>
            <td>{gas_log.fuel}</td>
            <td>{gas_log.brand}</td>
            <td>${gas_log.price}</td>
            <td>${gas_log.total}</td>
          </tr>
          <hr></hr>
        </tbody>
      )
    })

    return (
      <Fragment>
        <h1 className="app-title">Gas Logs</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Odometer____</th>
              <th>Volume (gal)____</th>
              <th>Fuel Type____</th>
              <th>Brand____</th>
              <th>Price per gal ($)____</th>
              <th>Total ($)</th>
            </tr>
          </thead>
          {gas_logs}
        </table>
      </Fragment>
    )
  }
}


export default withRouter(GasLogs)
