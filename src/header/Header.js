import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password" className="badge badge-info m-3">Change Password</Link>
    <Link to="/sign-out" className="badge badge-info m-3">Sign Out</Link>
    <Link to='/gas_logs' className="badge badge-warning m-3">Gas Logs</Link>
    <Link to='/create' className="badge badge-success m-3">New Gas Log</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up" className="badge badge-success m-3">Sign Up</Link>
    <Link to="/sign-in" className="badge badge-success m-3">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/" className="badge badge-info m-3">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>MileEdge</h1>
    <img src={require('./car.png')} width="70px" height="70px" className="logo" alt="logo"/>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
