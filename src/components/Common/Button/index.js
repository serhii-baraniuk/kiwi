import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Button = props => (
  <button className="button" {...props}>
    <span className="button__text">
      {props.text}
    </span>
  </button>
)

Button.propTypes = {
  text: PropTypes.node,
}

Button.defaultProps = {
  text: null,
}

export default Button
