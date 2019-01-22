import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

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

  componentDidMount () {
    const id = this.props.match.params.id

    fetch(`${apiUrl}/gas_logs`)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ gas_log: data.gas_logs }))
      .catch(() => this.setState({ notFound: true }))
  }

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

  render () {
    console.log(this.state)
    const gas_logs = this.state.gas_log.map(gas_log => {
      return (
        <div key={gas_log.id}>
          <ul  className="logs">
            <Link to={`/gas_logs/${gas_log.id}`}><h5>⛽️ Log #{gas_log.id}</h5></Link>
            <li><strong>Date:</strong> {gas_log.date}</li>
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
    // const { gas_log, notFound, deleted } = this.state

    // if (notFound) {
    //   return <Redirect to="/" />
    // } else if (!gas_log) {
    //   return <p>loading...</p>
    // } else if (deleted) {
    //   return (<Redirect to={{
    //     pathname: '/',
    //     state: { message: 'Gas Log successfully deleted!'}
    //   }} />
    //   )


    // const { date, odometer, volume, fuel, brand, price, total } = gas_log
    return (
      <Fragment>
        <h1><strong>Gas Logs</strong></h1>
        {gas_logs}
      </Fragment>
    )
  }
}


export default withRouter(GasLogs)
