import React, { Component } from 'react'
import { withRouter } from 'react-router'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

class GasLog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movie: null,
      notFound: false,
      deleted: false
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id

    fetch(`${apiUrl}/gas_logs/${id}`)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ movie: data.movie }))
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

    const { gasLog, notFound, deleted } = this.state

    if (notFound) {
      return <Redirect to="/" />
    } else if (!gasLog) {
      return <p>loading...</p>
    } else if (deleted) {
      return (<Redirect to={{
        pathname: '/',
        state: { message: 'Gas Log successfully deleted!'}
      }} />
      )
    }


    const { date, odometer, volume, fuel, brand, price, total } = gasLog
    return (
      <React.Fragment>
        <h5 className="m-3">{date}</h5>
        <p className="m-3">Odometer: {odometer} miles</p>
        <p className="m-3">Volume: {volume} gallons</p>
        <p className="m-3">Fuel Type: {fuel}</p>
        <p className="m-3">Brand: {brand}</p>
        <p className="m-3">Price per gal: ${price}</p>
        <p className="m-3">Total: ${total}</p>
        <button onClick={this.destroy} className="badge badge-warning m-3">Delete</button>
        <button className="badge badge-info m-3"><Link to={`/gas_logs/${id}/edit`}>Edit</Link></button>
        <button className="badge badge-success m-3"><Link to='/home/'>Back</Link></button>
      </React.Fragment>
    )
  }
}

export default withRouter(GasLog)
