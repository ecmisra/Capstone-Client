import React from 'react'
import { Link } from 'react-router-dom'


// Form used for CREATING and EDITING Gas Logs
const GasLogForm = ({ handleChange, handleSubmit, gas_log, id, date, odometer, volume, fuel, brand, price, total }) => (
  <form className='gas-log-form' onSubmit={handleSubmit}>
    <label htmlFor="date">Date</label>
    <input className="inputs"
      required
      type="date"
      name="date"
      value={gas_log.date}
      // placeholder="Email"
      onChange={handleChange}
    />
    <label htmlFor="odometer">Odometer</label>
    <input className="inputs"
      required
      name="odometer"
      value={gas_log.odometer}
      placeholder="Odometer Reading"
      onChange={handleChange}
    />
    <label htmlFor="volume">Volume</label>
    <input className="inputs"
      required
      name="volume"
      value={gas_log.volume}
      placeholder="Amount of Gas"
      onChange={handleChange}
    />
    <label htmlFor="fuel">Fuel Type</label>
    <input className="inputs"
      required
      name="fuel"
      value={gas_log.fuel}
      placeholder="Type of Fuel"
      onChange={handleChange}
    />
    <label htmlFor="brand">Brand</label>
    <input className="inputs"
      required
      name="brand"
      value={gas_log.brand}
      placeholder="Brand of Gas"
      onChange={handleChange}
    />
    <label htmlFor="price">Price per Gal</label>
    <input className="inputs"
      required
      name="price"
      value={gas_log.price}
      placeholder="$ per gallon"
      onChange={handleChange}
    />
    <label htmlFor="total">Total $</label>
    <input className="inputs"
      required
      name="total"
      value={gas_log.total}
      placeholder="Total spent"
      onChange={handleChange}
    />
    <button type="submit" className="form-submit">Submit</button>
  </form>
)

export default GasLogForm
