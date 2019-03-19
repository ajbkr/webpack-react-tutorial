import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ handleChange, id, label, text, type, value }) => (
  <div className='form-group'>
    <label htmlFor={label}>{text}</label>
    <input
      className='form-control'
      id={id}
      onChange={handleChange}
      required
      type={type}
      value={value}
    />
  </div>
)

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Input
