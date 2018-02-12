import React from 'react'
import PropTypes from 'prop-types'
import FlyItem from '../FlyItem'
import './index.css'

const FlyList = props => (
  <div className="fly-list">
    {props.data.map(item => (
      <div key={item.id} className="fly-list__item">
        <FlyItem
          from={item.cityFrom}
          to={item.cityTo}
          price={item.price}
          date={item.dTimeUTC * 1000}
          currency={props.currency}
        />
      </div>
    ))}
  </div>
)

FlyList.propTypes = {
  currency: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string),
}

FlyList.defaultProps = {
  currency: 'EUR',
  data: [],
}

export default FlyList
