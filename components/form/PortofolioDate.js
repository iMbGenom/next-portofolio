import React, { Component } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

class PortofolioDate extends Component {

  constructor(props) {
    super(props)
    this.state = {
        dateValue: new Date()
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
        dateValue: date
    })
  }

  render() {
    return (
        <DatePicker
            selected={this.state.dateValue}
            onChange={this.handleChange}
        />
    )
  }
}

export default PortofolioDate 