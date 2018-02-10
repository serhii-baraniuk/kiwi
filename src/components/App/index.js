import React, { Component } from 'react'
import SearchForm from '../SearchForm'
import './index.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filters: {},
      items: [],
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
      const response = await fetch(`https://api.skypicker.com/flights?v=2&locale=en&flyFrom=${this.state.filters.countryFrom}&to=${this.state.filters.countryTo}&dateFrom=${this.state.filters.dateFrom}&dateTo=${this.state.filters.dateTo}`)
      const data = await response.json()
      this.setState({ isLoading: false, isLoaded: true, items: data.data })
    } catch (error) {
      this.setState({ isLoading: false, error: error.message })
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <SearchForm onSubmit={this.handleChangeFilters} />
        </div>

        {this.state.error &&
          <div>{this.state.error}</div>
        }

        {this.state.isLoaded &&
          <div>is loaded</div>
        }

        {this.state.isLoading &&
          <div>is loading...</div>
        }

        {this.state.items.map(item => (
          <div>
            <div>{item.cityFrom} - {item.cityTo} - {item.dTime}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default App
