import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const FlyItem = props => (
  <div className="fly-item">
    <div className="fly-item__left">
      <div className="fly-item__cities">
        <span className="fly-item__from">{props.from}</span>
        <span>&nbsp;-&nbsp;</span>
        <span className="fly-item__to">{props.to}</span>
      </div>
      <div className="fly-item__date">{new Date(props.date).toString()}</div>
    </div>
    <div className="fly-item__right">
      <span className="fly-item__price">{props.price}</span>
      <span className="fly-item__currency">{props.currency}</span>
    </div>
  </div>
)

FlyItem.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  date: PropTypes.number,
  price: PropTypes.number,
  currency: PropTypes.string,
}

FlyItem.defaultProps = {
  from: '',
  to: '',
  date: 0,
  price: 0,
  currency: 'EUR',
}

export default FlyItem
