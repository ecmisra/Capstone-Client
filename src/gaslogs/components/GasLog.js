import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import messages from '../messages.js'

class GasLog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: props.user,
      gas_log: null,
      notFound: false,
      deleted: false
    }
  }

  // SHOW one Gas Log

  componentDidMount () {
    const id = this.props.match.params.id

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${this.state.user.token}`
      }
    }

    fetch(`${apiUrl}/gas_logs/${id}`, options)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ gas_log: data.gas_log }))
      .catch(() => this.setState({ notFound: true }))
  }

  // DELETE one Gas Log

  destroy = () => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${this.state.user.token}`
      },
    }

    const id = this.props.match.params.id
    const { flash } = this.props

    fetch(`${apiUrl}/gas_logs/${id}`, options)
      .then(res => res.ok ? res : new Error())
      .then(data => this.setState({ deleted: true }))
      .then(() => flash(messages.deleteLogSuccess, 'flash-success'))
      .catch(() => flash(messages.deleteLogFailure, 'flash-error'))
      .catch(() => this.setState({ notFound: true }))
  }

  render () {

    const { gas_log, notFound, deleted } = this.state

    if (notFound) {
      return <Redirect to="/" />
    } else if (!gas_log) {
      return <p>loading...</p>
    } else if (deleted) {
      return (<Redirect to={{
        pathname: '/gas_logs',
        state: { message: 'Log successfully deleted!'}
      }} />
      )
    }


    const { id } = gas_log
    return (
      <React.Fragment>
        <ul  className="logs">
          <h4 className="log-title app-title">⛽️ Log on {gas_log.date}</h4>
          <li><strong>Date:</strong> {gas_log.date}</li>
          <li><strong>Odometer:</strong> {gas_log.odometer} miles</li>
          <li><strong>Volume:</strong> {gas_log.volume} gallons</li>
          <li><strong>Fuel Type:</strong> {gas_log.fuel}</li>
          <li><strong>Brand of Gas:</strong> {gas_log.brand}</li>
          <li><strong>Price per gal:</strong> ${gas_log.price}</li>
          <li><strong>Total spent:</strong> ${gas_log.total}</li>
        </ul>
        <button onClick={this.destroy} className="badge badge-warning m-3">Delete</button>
        <button className="badge badge-success m-3"><Link to={`/gas_logs/${id}/edit`}>Edit</Link></button>
        <button className="badge badge-info m-3"><Link to='/gas_logs/'>Back</Link></button>
      </React.Fragment>
    )
  }
}

export default withRouter(GasLog)
