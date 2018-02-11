import React, { Component } from 'react'
import SearchForm from '../SearchForm'
import Ticket from '../Ticket'
import queryParams from '../../utils/queryParams'
import './index.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filters: {},
      data: [],
      isLoading: false,
      isLoaded: false,
      error: undefined,
    }

    this.handleChangeFilters = this.handleChangeFilters.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  handleChangeFilters(filters) {
    this.setState({ filters }, this.fetchData)
  }

  async fetchData() {
    if (this.state.isLoading) return

    try {
      this.setState({ isLoading: true, error: undefined })

      const query = queryParams({
        v: 2,
        locale: 'en',
        typeFlight: this.state.filters.dateTo ? 'return' : 'oneway',
        ...this.state.filters,
      })

      const response = await fetch(`https://api.skypicker.com/flights?${query}`)
      const data = await response.json()
      this.setState({ isLoading: false, isLoaded: true, data })
    } catch (error) {
      this.setState({ isLoading: false, error: 'Something went wrong' })
    }
  }

  render() {
    return (
      <div className={`main-page ${this.state.isLoading ? 'main-page_loading' : ''}`}>
        <div className="main-page__filters">
          <div className="main-page__filters-inner">
            <h1 className="main-page__title">KIWI</h1>
            <SearchForm
              onSubmit={this.handleChangeFilters}
              disabled={this.state.isLoading}
              isLoading={this.state.isLoading}
            />
          </div>
        </div>

        <div className="main-page__result">
          {this.state.error &&
            <div className="main-page__error">
              {this.state.error}
            </div>
          }

          {this.state.isLoaded && this.state.data.data.map(item => (
            <div key={item.id} className="main-page__ticket">
              <Ticket
                from={item.cityFrom}
                to={item.cityTo}
                price={item.price}
                date={item.dTimeUTC * 1000}
                currency={this.state.data.currency}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
