import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CountryField from '../CountryField'

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
      <form onSubmit={this.handleSubmit}>
        <CountryField onChange={countryFrom => this.setState({ countryFrom })} />
        <CountryField onChange={countryTo => this.setState({ countryTo })} />

        <input
          type="date"
          name="dateFrom"
          onChange={e => this.handleChangeDate(e, 'dateFrom')}
        />

        <input
          type="date"
          name="dateTo"
          onChange={e => this.handleChangeDate(e, 'dateTo')}
        />

        <input type="submit" onClick={this.handleSubmit} />
      </form>
    )
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
}

SearchForm.defaultProps = {
  onSubmit: () => {},
}

export default SearchForm
