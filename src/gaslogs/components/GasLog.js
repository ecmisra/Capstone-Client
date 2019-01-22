import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

class GasLog extends Component {
  constructor (props) {
    super(props)
    console.log('props, gas_log', props)

    this.state = {
      user: props.user,
      gas_log: null,
      notFound: false,
      deleted: false
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id

    fetch(`${apiUrl}/gas_logs/${id}`)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ gas_log: data.gas_log }))
      .catch(() => this.setState({ notFound: true }))
  }

  destroy = () => {
    const options = {
      method: 'DELETE'
    }

    const id = this.props.match.params.id

    fetch(`${apiUrl}/gas_logs/${id}`, options)
      .then(res => res.ok ? res : new Error())
      .then(data => this.setState({ deleted: true }))
      .catch(() => this.setState({ notFound: true }))
  }

  render () {
    console.log(this.state)

    const { gas_log, notFound, deleted } = this.state

    if (notFound) {
      return <Redirect to="/" />
    } else if (!gas_log) {
      return <p>loading...</p>
    } else if (deleted) {
      return (<Redirect to={{
        pathname: '/',
        state: { message: 'Log successfully deleted!'}
      }} />
      )
    }


    const { id } = gas_log
    return (
      <React.Fragment>
        <ul  className="logs">
          <h5>⛽️ Log #{gas_log.id}</h5>
          <li><strong>Date:</strong> {gas_log.date}</li>
          <li><strong>Odometer:</strong> {gas_log.odometer} miles</li>
          <li><strong>Volume:</strong> {gas_log.volume} gallons</li>
          <li><strong>Fuel Type:</strong> {gas_log.fuel}</li>
          <li><strong>Brand of Gas:</strong> {gas_log.brand}</li>
          <li><strong>Price per gal:</strong> ${gas_log.price}</li>
          <li><strong>Total spent:</strong> ${gas_log.total}</li>
        </ul>
        <button onClick={this.destroy} className="badge badge-warning m-3">Delete</button>
        <button className="badge badge-info m-3"><Link to={`/gas_logs/${id}/edit`}>Edit</Link></button>
        <button className="badge badge-success m-3"><Link to='/gas_logs/'>Back</Link></button>
      </React.Fragment>
    )
  }
}

export default withRouter(GasLog)
