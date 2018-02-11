import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '../Common/Input'
import Button from '../Common/Button'
import CountryField from '../CountryField'
import './index.css'

class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countryFrom: undefined,
      countryTo: undefined,
      dateFrom: undefined,
      dateTo: undefined,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChangeDate(e, type) {
    const { value } = e.target
    const [year, month, day] = value.split('-')
    this.setState({ [type]: `${day}/${month}/${year}` })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <div>
          <CountryField
            placeholder="From"
            onChange={countryFrom => this.setState({ countryFrom })}
          />
          <CountryField
            placeholder="To"
            onChange={countryTo => this.setState({ countryTo })}
          />
        </div>

        <div className="search-form__dates">
          <Input
            type="date"
            name="dateFrom"
            onChange={e => this.handleChangeDate(e, 'dateFrom')}
          />

          <Input
            type="date"
            name="dateTo"
            onChange={e => this.handleChangeDate(e, 'dateTo')}
          />

        </div>

        <div className="search-form__submit">
          <Button
            type="submit"
            disabled={this.props.disabled}
            onClick={this.handleSubmit}
            text={<span>{this.props.isLoading ? 'loading...' : 'Go'}</span>}
            style={{
              color: 'white',
              background: '#21955b',
              width: '100%',
            }}
          />
        </div>

      </form>
    )
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
}

SearchForm.defaultProps = {
  onSubmit: () => {},
  disabled: false,
  isLoading: false,
}

export default SearchForm
