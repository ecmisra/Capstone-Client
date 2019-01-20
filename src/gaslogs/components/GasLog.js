import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

class GasLog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      gasLog: [],
      notFound: false,
      deleted: false
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id

    fetch(`${apiUrl}/gas_logs`)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ gasLog: data.gas_logs }))
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
    const gasLogs = this.state.gasLog.map(gasLog => {
      return (
        <div key={gasLog}>
          <ol>
            <li>Date: {gasLog.date}</li>
            <li>Odometer: {gasLog.odometer}</li>
            <li>Volume: {gasLog.volume}</li>
            <li>Fuel Type: {gasLog.fuel}</li>
            <li>Brand of Gas: {gasLog.brand}</li>
            <li>Price per gal: ${gasLog.price}</li>
            <li>Total spent: ${gasLog.total}</li>
          </ol>
        </div>
      )
    })
    // const { gasLog, notFound, deleted } = this.state

    // if (notFound) {
    //   return <Redirect to="/" />
    // } else if (!gasLog) {
    //   return <p>loading...</p>
    // } else if (deleted) {
    //   return (<Redirect to={{
    //     pathname: '/',
    //     state: { message: 'Gas Log successfully deleted!'}
    //   }} />
    //   )


    // const { date, odometer, volume, fuel, brand, price, total } = gasLog
    return (
      <Fragment>
        <h1>hello</h1>
        {gasLogs}
      </Fragment>
    )
  }
}


export default withRouter(GasLog)
