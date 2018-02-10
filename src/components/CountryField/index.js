import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Autocomplete from 'react-autocomplete'
import debounce from 'lodash/debounce'

class CountryField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      items: [],
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleChangeValue = this.handleChangeValue.bind(this)
    this.changeValue = debounce(this.changeValue, 300)
  }

  async changeValue(value) {
    const response = await fetch(`https://api.skypicker.com/places?term=${value}&v=2&locale=en`)
    const items = await response.json()
    this.setState({ items })
  }

  handleChangeValue(e) {
    e.persist()
    const { value } = e.target
    this.setState({ value })
    this.changeValue(value)
  }

  handleSelect(id) {
    const [selectedItem] = this.state.items.filter(item => item.id === id)
    this.setState({ value: selectedItem.value })
    this.props.onChange(id)
  }

  render() {
    return (
      <Autocomplete
        getItemValue={item => item.id}
        items={this.state.items}
        onChange={this.handleChangeValue}
        onSelect={this.handleSelect}
        value={this.state.value}
        renderItem={(item, isHighlighted) => (
          <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.value}
          </div>
        )}
      />
    )
  }
}

CountryField.propTypes = {
  onChange: PropTypes.func,
}

CountryField.defaultProps = {
  onChange: () => {},
}

export default CountryField
