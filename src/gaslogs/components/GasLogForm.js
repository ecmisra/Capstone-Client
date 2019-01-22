import React from 'react'
import { Link } from 'react-router-dom'

const GasLogForm = ({ handleChange, handleSubmit, gas_log, id, date, odometer, volume, fuel, brand, price, total }) => (
  <form className='gas-log-form' onSubmit={this.handleSubmit}>
    <h3>New Gas Log</h3>
    <label htmlFor="date">Date</label>
    <input
      required
      type="date"
      name="date"
      value={date}
      // placeholder="Email"
      onChange={this.handleChange}
    />
    <label htmlFor="odometer">Odometer</label>
    <input
      required
      name="odometer"
      value={odometer}
      placeholder="Odometer Reading"
      onChange={this.handleChange}
    />
    <label htmlFor="volume">Volume</label>
    <input
      required
      name="volume"
      value={volume}
      placeholder="Amount of Gas"
      onChange={this.handleChange}
    />
    <label htmlFor="fuel">Fuel Type</label>
    <input
      required
      name="fuel"
      value={fuel}
      placeholder="Type of Fuel"
      onChange={this.handleChange}
    />
    <label htmlFor="brand">Brand</label>
    <input
      required
      name="brand"
      value={brand}
      placeholder="Brand of Gas"
      onChange={this.handleChange}
    />
    <label htmlFor="price">Price</label>
    <input
      required
      name="price"
      value={price}
      placeholder="$ per gallon"
      onChange={this.handleChange}
    />
    <label htmlFor="total">Total $</label>
    <input
      required
      name="total"
      value={total}
      placeholder="Total spent"
      onChange={this.handleChange}
    />
    <button type="submit">Create Log</button>
  </form>
)

export default GasLogForm
