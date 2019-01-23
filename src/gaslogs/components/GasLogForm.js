import React from 'react'
import { Link } from 'react-router-dom'

const GasLogForm = ({ handleChange, handleSubmit, gas_log, id, date, odometer, volume, fuel, brand, price, total }) => (
  <form className='gas-log-form' onSubmit={handleSubmit}>
    <label htmlFor="date">Date</label>
    <input
      required
      type="date"
      name="date"
      value={gas_log.date}
      // placeholder="Email"
      onChange={handleChange}
    />
    <label htmlFor="odometer">Odometer</label>
    <input
      required
      name="odometer"
      value={gas_log.odometer}
      placeholder="Odometer Reading"
      onChange={handleChange}
    />
    <label htmlFor="volume">Volume</label>
    <input
      required
      name="volume"
      value={gas_log.volume}
      placeholder="Amount of Gas"
      onChange={handleChange}
    />
    <label htmlFor="fuel">Fuel Type</label>
    <input
      required
      name="fuel"
      value={gas_log.fuel}
      placeholder="Type of Fuel"
      onChange={handleChange}
    />
    <label htmlFor="brand">Brand</label>
    <input
      required
      name="brand"
      value={gas_log.brand}
      placeholder="Brand of Gas"
      onChange={handleChange}
    />
    <label htmlFor="price">Price</label>
    <input
      required
      name="price"
      value={gas_log.price}
      placeholder="$ per gallon"
      onChange={handleChange}
    />
    <label htmlFor="total">Total $</label>
    <input
      required
      name="total"
      value={gas_log.total}
      placeholder="Total spent"
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
)

export default GasLogForm
