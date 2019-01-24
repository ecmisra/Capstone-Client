import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, changePassword } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: '',
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  changePassword = event => {
    event.preventDefault()

    const { oldPassword, newPassword } = this.state
    const { flash, history, user } = this.props

    changePassword(this.state, user)
      .then(handleErrors)
      .then(() => flash(messages.changePasswordSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.changePasswordFailure, 'flash-error'))
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <form className='auth-form' onSubmit={this.changePassword}>
        <h3 className="app-title">Change Password</h3>

        <label htmlFor="oldpw">Old Password</label>
        <input className="inputs"
          required
          name="oldPassword"
          value={oldPassword}
          type="password"
          placeholder="Old Password"
          onChange={this.handleChange}
        />
        <label htmlFor="newPassword">New Password</label>
        <input className="inputs"
          required
          name="newPassword"
          value={newPassword}
          type="password"
          placeholder="New Password"
          onChange={this.handleChange}
        />
        <button type="submit" className="form-submit">Change Password</button>
      </form>
    )
  }
}

export default withRouter(ChangePassword)
