import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Ticket = props => (
  <div className="ticket">
    <div className="ticket__left">
      <div className="ticket__cities">
        <span className="ticket__from">{props.from}</span>
        <span>&nbsp;-&nbsp;</span>
        <span className="ticket__to">{props.to}</span>
      </div>
      <div className="ticket__date">{new Date(props.date).toDateString()}</div>
    </div>
    <div className="ticket__right">
      <span className="ticket__price">{props.price}</span>
      <span className="ticket__currency">{props.currency}</span>
    </div>
  </div>
)

Ticket.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  date: PropTypes.number,
  price: PropTypes.number,
  currency: PropTypes.string,
}

Ticket.defaultProps = {
  from: '',
  to: '',
  date: 0,
  price: 0,
  currency: 'EUR',
}

export default Ticket
